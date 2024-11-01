import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/navbar.jsx"
import { doctors,doctors_services } from "../../constants/data.js";

function AppointmentAdd(){

    return <>
        <NavBar/>
        <div className="container-fluid mt-page mt-page " >
            <div className="row col-lg-4">
                <div className="col-12">
                    <h2>Novo Agendamento</h2>
                </div>
                <div className="col-12">
                    <label htmlFor="doctor" className="form-label">Médico</label>
                <div className="form-control mb-2">
                    <select name="doctor" id="doctor"> 
                        <option value="0">Selecione o médico</option>

                        {
                            doctors.map((doc)=>{
                                return <option key={doc.id_doctor} 
                                value={doc.id_doctor}>{doc.name}</option>
                            })
                        }
                    </select>
                </div>
                </div>

                <div className="col-12">
                    <label htmlFor="service" className="form-label">Serviço</label>
                <div className="form-control mb-2">
                    <select name="doctor" id="service"> 
                        <option value="0">Selecione o serviço</option>

                        {
                            doctors_services.map((doc)=>{
                                return <option key={doc.id_service} 
                                value={doc.id_service}>{doc.description}</option>
                            })
                        }
                    </select>
                </div>
                </div>

                <div className="col-6">
                    <label htmlFor="bookingDate" className="form-label">Data</label>
                    <input type="date" className="form-control" name="bookingDate" id="bookingDate" />
                        
                
                </div>  
                <div className="col-6">
                    <label htmlFor="bookingHour" className="form-label">Horário</label>
                    <div className="form-control mb-2">
                        <select name="bookingHour" id="bookingHour">
                            <option value="0">Horário</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="13:00">13:00</option>


                        </select>

                    </div>
                        
                
                </div>

                <div className="col-12">
                        <div className="d-flex justify-content-end">
                            <Link to="/appointments" className="btn btn-outline-primary">Cancelar</Link>
                            <button className="btn btn-primary">Salvar Dados</button>
                        </div>
                </div>




            </div>

        </div>

    </>
}

export default AppointmentAdd;