import React, {useState} from 'react'
import '../App.css'
import { IconButton } from '@mui/material';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useNavigate } from 'react-router-dom';


const CustomPlanform = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        mobile: '',
        package: '',
        message: ''
      });
    const navigate = useNavigate();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleClose=()=>{
      navigate(-1);

      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
       
      };
  return (
        <div className="contact-form">
          
          <form onSubmit={handleSubmit}>
          <IconButton  fontSize="large" aria-label='CloseSharp' onClick={handleClose} sx={{ fontSize:"20rem", top:2, ml:50, color:"Orange"}}>
            <CloseSharpIcon />
          </IconButton>
            <h2>Contact Us</h2>
            <label>
              Full Name
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Company Name (Optional)
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Mobile
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Choose Package
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
              >
                <option value="Vedic">Vedic</option>
                <option value="Western">Western</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
  )
}

export default CustomPlanform