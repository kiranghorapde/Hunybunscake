import { useState } from "react";
import emailjs from "emailjs-com";

  const Contact1 = () => {
  const initialFormState = {
    Fname: "",
    MoNo: "",
    Email: "",
    Message: "",
  };

  const [Form, setForm] = useState(initialFormState);

  const changeForm = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_zi7vqge",
        "template_mw21uxk",
        e.target,
        "-UpScXY61NfWUklpW"
      )
      .then((response) => {
        console.log("Email sent Successfully", response.status, response.text);
      })
      .catch((error) => {
        console.log("Email sending failed", error);
      });
  
    setForm(initialFormState); // Reset form state
  };

  const handleClear = () => {
    setForm(initialFormState);
  };

  return (
    <div>
      <div className="py-10 ">
        <h2 className="py-2 text-center font-bold text-3xl text-red-950 font-serif ">
          Contact
        </h2>
        <div className=" p-3 pb-6 sm:p-2 sm:mx-80  sm:px-36">
          <h1 className=" py-7 text-center font-bold text-3xl text-red-950 font-serif ">
            The Joy of Hunny Buns Cake
          </h1>
          <p className="text-center font-serif text-xl">
            Creamy and velvety delight <br /> made with cream cheese and sour
            cream <br /> atop a buttery crackers crust that leaves <br /> a
            sweet lingering bliss. more. Cake Flavours Pure Veg ..
          </p>

          <button className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-8 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
            Read More
          </button>
        </div>

        <div className="sm:flex sm:justify-center"></div>
      </div>

      <div className="sm:grid sm:grid-cols-2 m-4 sm:mx-20 w-auto sm:gap-10 ">
        <div className="bg-[#f6e1e1] sm:w[660px] sm:h-[527px] w[360px] h-[490px] ">
          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <h1 className="font-serif text-red-900 text-xl">Our Address</h1>
              <p className="">
                Beside Sakal Office, Jalna Road, CIDCO, Ch.Sambhaji Nagar,
                Maharastra <br /> (India) - 431136.
              </p>
            </div>
          </div>

          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <h1 className="font-serif text-red-900 text-xl">Email Us</h1>
              <p>kirannkale358@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col-2 gap-4  p-4 sm:p-6">
            <div>
              <h1 className="font-serif text-red-900 text-xl">Call Us</h1>
              <p>+91-9096541534 , +91-9096541534</p>
            </div>
          </div>

          <div className="flex flex-col-2 gap-4 p-4 sm:p-6">
            <div>
              <h1 className="font-serif text-red-900 text-xl">Address</h1>
              <p>
                CIDCO Cannought, Connaught Place, Ch.Sambhaji Nagar, Maharastra
                (India) - 431136.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:mt-0 mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15008.567106673341!2d75.3633234!3d19.8762344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3621100b6c3%3A0xd599271d941a486b!2sHunny%20Buns!5e0!3m2!1smr!2sin!4v1711019429514!5m2!1smr!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <section className="text-red-950 shadow-lg body-font relative">
        {/* UserFrom Start */}

        <div className=" flex justify-center  text-red-900  ">
          <form
            className="bg-[#f6e1e1]  w-full text-red-950 sm:p-10 p-5 sm:w-[500px]"
            onSubmit={handleSubmit}
          >
            <h1 className="  text-center p-3 font-serif text-xl sm:text-2xl">
              Feedback
            </h1>
            <input
              className="  bg-[#f6e1e1]   sm:w-[400px]  text-red-950  py-5 border-b-2  border-white "
              type="text"
              placeholder=" Name"
              name="Fname"
              onChange={changeForm}
              value={Form.Fname}
            />
            <br></br>

            <input
              className=" bg-[#f6e1e1]  sm:w-[400px]  text-red-950  py-5 border-b-2  border-white "
              type="text"
              placeholder=" Mobile Number"
              name="MoNo"
              onChange={changeForm}
              value={Form.MoNo}
            />
            <br></br>

            <input
              className=" bg-[#f6e1e1] sm:w-[400px]   text-red-950  py-5 border-b-2 border-white"
              type="email"
              placeholder=" Email"
              name="Email"
              onChange={changeForm}
              value={Form.Email}
            />
            <br></br>

            <textarea
              className=" bg-[#f6e1e1]  sm:w-[400px]  text-red-950  py-5 border-b-2  border-white "
              placeholder=" Message"
              name="Message"
              onChange={changeForm}
              value={Form.Message}
            />
            <br></br>

            <div className="bg-[#f6e1e1] gap-28 flex justify-center text-red-950  border-b-2 border-white ">
              <div>
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-8 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg"
                >
                  Submit
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-8 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact1;
