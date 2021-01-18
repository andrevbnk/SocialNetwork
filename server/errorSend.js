module.exports = function(res,status) {
    console.log(status);
    let hint = " ,попробуйте перезайти или зарегестрироваться"
    let statueErrorList = {
      401:"Неавторизованый пользователь или неправельные данные"+hint,
      402:"Необходима оплата",
      403:"У пользователя нет прав"+hint,
    };
    return res.status(status).send({ message: statueErrorList.status,status:false });
}