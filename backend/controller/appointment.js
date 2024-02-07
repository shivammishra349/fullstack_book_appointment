let Appointment=require('../model/admin');

exports.getAppointment=async(req,res,next)=>{
    try{
    const user=await Appointment.findAll();
    res.status(200).json({allusers:user})
    }catch(err){
        console.log('get user is failing',JSON.stringify(err))
        res.status(500).json({error:err})
    }
}


exports.postAddAppointment = async (req, res, next) => {
    try {
   
      const name = req.body.name;
      const email = req.body.email;
      const phone = req.body.tel;

      console.log(name);
      console.log(email);
      console.log(phone);
  
      const data = await Appointment.create({
        name: name,
        email: email,
        phone:phone
      });
      res.status(201).json({ newUserDetail: data });
    } catch (error) {
      console.log("add user is failing", error);
      res.status(500).json({ error: "Internal server error",msg:"somthing went wrong" });
    }
  };





exports.deleteAppointment = async (req, res, next) => {
    try {
        if (!req.params.id) {
            console.log('id is missing');
            return res.status(400).json({ err: 'id is missing' });
        }

        const uId = req.params.id;
        await Appointment.destroy({ where: { id: uId } });

        return res.status(200).json({ message: 'Deletion successful' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
