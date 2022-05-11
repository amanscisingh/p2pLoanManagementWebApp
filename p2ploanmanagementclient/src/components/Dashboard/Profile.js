import React from 'react'

const Profile = () => {
  return (
    <div className='bottomContainer'>
      <div className="generalInformation">
        <label htmlFor="profilePic">Change profile pic</label>
        <input type="file" name="profilePic" id="profilePic" />
        <button>Upload</button>
        <br />

        <label htmlFor="Name"> Name </label>
        <input type="text" name="name" id="name" />
        <br />

        <label htmlFor="phNo">Phone No.</label>
        <input type="text" name="phNo" id="phNo" />
        <br />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <br />

      </div>

      <div className="questionsSection">
        <h3>Bank Details</h3>
        <label htmlFor="bankName">Bank Name</label>
        <input type="text" name="bankName" id="bankName" />
        <br />

        <label htmlFor="bankAccountNo">Bank Account No.</label>
        <input type="text" name="bankAccountNo" id="bankAccountNo" />
        <br />

        <label htmlFor="bankIfsc">Bank IFSC Code</label>
        <input type="text" name="bankIfsc" id="bankIfsc" />
        <br />

        <h3>Pan Details</h3>
        <label htmlFor="panNo">Pan No.</label>
        <input type="text" name="panNo" id="panNo" />
        <br />

        <label htmlFor="panDocument">PAN Document</label>
        <input type="file" name="panDocument" id="panDocument" />
        <button>Upload</button>
        <br />

        <h3>Adhaar</h3>
        <label htmlFor="adhaarNo">Adhaar No.</label>
        <input type="text" name="adhaarNo" id="adhaarNo" />
        <br />

        <label htmlFor="adhaarDocument">Adhaar Document</label>
        <input type="file" name="adhaarDocument" id="adhaarDocument" />
        <button>Upload</button>
        <br />

        <h3>Salery Slip (Upload One By One | Uploaded Ones will appear below) </h3>
        <label htmlFor="salerySlip">Salery Slip</label>
        <input type="file" name="salerySlip" id="salerySlip" />
        <input type="text" name="saleryAmount" id="saleryAmount" placeholder='Enter Amount (in Rs)' />
        <button>Upload</button>
        <br />

        <h3>CTC Information</h3>
        <label htmlFor="ctc">CTC</label>
        <input type="text" name="ctc" id="ctc" />
        <br />

      </div>
    </div>
  )
}

export default Profile