import React from "react";

export default function Regform() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Alumni Registered Successfully!");
  }

  return (
    <>
      <div>

        <style>{`
          
          body {
            margin: 0;
            padding: 0;
            background : lightgrey;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
          }

          .form-container {
            width:800px;
            padding: 20px;
            margin: 30px auto;
            border: 1px solid #aaa;
            border-radius: 40px;
            font-family: Arial;
            background: rgba(255,182,193,0.92); 
            backdrop-filter: blur(2px);
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 15px;
          }

          .form-container input,
          .form-container select {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: 1px solid #999;
            border-radius: 5px;
          }

          .form-container label {
            font-size: 14px;
            font-weight: bold;
            display:block;
            margin-top:10px;
          }

          .btn-submit {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background: #E532BC;
            color: white;
            font-size: 16px;
            margin-top: 10px;
          }

          .radio-group {
            display: flex;
            gap: 20px;
            margin: 10px 0;
          }
          .radio-option {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .checkbox-group {
            display: flex;
            gap: 25px;
            margin: 10px 0;
          }
          .checkbox-option {
            display: flex;
            align-items: center;
            gap: 5px;
          }

        `}</style>


        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Alumni Registration</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email</label> 
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" required />

          <label>Gender</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="gender" value="Male" /> Male
            </label>

            <label className="radio-option">
              <input type="radio" name="gender" value="Female" /> Female
            </label>

            <label className="radio-option">
              <input type="radio" name="gender" value="Other" /> Other
            </label>
          </div>

          <label>Department</label>
          <select required>
            <option value="">Select Department</option>
            <option>BCA</option>
            <option>B.Sc CS</option>
            <option>B.Com</option>
            <option>BA English</option>
            <option>BBA</option>
          </select>

          <label>Passing Year</label>
          <select required>
            <option value="">Select Year</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </select>

          <label>Skills / Interests</label>
          <div className="checkbox-group">
            <label className="checkbox-option">
              <input type="checkbox" value="Coding" /> Coding
            </label>

            <label className="checkbox-option">
              <input type="checkbox" value="Designing" /> Designing
            </label>

            <label className="checkbox-option">
              <input type="checkbox" value="Management" /> Management
            </label>
          </div>

          <label>Upload Your Photo</label>
          <input type="file" accept="image/*" required />

          <label>Upload Resume (PDF)</label>
          <input type="file" accept=".pdf" />

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </>
  );
}

