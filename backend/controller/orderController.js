/*
 *  Логика: Заказы
 * 
 *  1) Формирование заказа
 *  2) Получить все заказы
 *  3) Удаление заказа
 */

const modeleOrder                 = require('../model/modeleOrder')
const {validationResult}          = require('express-validator')


class OrderController {
  // Сформировать заказ 
  static async order (req,res) {
    try {
      const errors = validationResult(req)

      if(!errors.isEmpty()) {
        return res.status(400).json({message:'Заказ не валидный', errors })
      }
      let {articul,email,textArea} = req.body
      let result = await modeleOrder.orderBy(articul,email,textArea)
      
      res.status(200).json({message:'Заказ сделан!!!', result})
    }catch (e) {
      console.log(e)
    }
  }
  // Вытащить все заказы из базы
  static async orderget (req,res) {
    try {
      let result = await modeleOrder.orderGetAll()
      res.status(200).json({message: 'Ok', result})
    } catch (e) {
      console.log(e)
    }
  }
  // Удалить заказ из базы по id
  static async deleteOrder (req,res) {
    try {
      let {id} = req.params
      let idProved = await modeleOrder.orderGetOne(id)
      if(idProved.length <= 0) {
        return res.status(400).json({message: `Поста c id: ${id} не существует!`,status: 'Bad'})
      }
      let result = await modeleOrder.deleteOrderByOne(id)
      res.status(200).json({message: 'Заказ был онулирован!',status: 'OK'})
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = OrderController