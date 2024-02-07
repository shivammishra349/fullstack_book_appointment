let express=require('express')

const router = express.Router();

let Appointment=require('../model/admin')

let Controller=require('../controller/appointment')

router.get('/get-appointment',Controller.getAppointment)

router.post('/add-appointment', Controller.postAddAppointment)

router.delete('/delete-apointment/:id',Controller.deleteAppointment)
module.exports=router
