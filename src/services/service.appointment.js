import repositoryAppointment from "../repositories/repository.appointment.js"


async function ListarByUser(id_doctor){

    const appointments = await repositoryAppointment.ListarByUser(id_doctor);

    return appointments

}
async function Inserir(id_user,id_doctor,id_service,booking_date,booking_hour){

    const appointment = await repositoryAppointment.Inserir(id_user,id_doctor,id_service,booking_date,booking_hour);

    return appointment

}

export default {ListarByUser,Inserir}