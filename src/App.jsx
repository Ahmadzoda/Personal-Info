import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("FirstName"));

  return (
    <div className="App">
      <div className="container">

        <div className="all pt-[60px] pb-[60px]">
        <div className="content flex justify-center gap-[50px] pb-[20px] pt-[10px]">
          
          <div className="content-left">
            <div className="left flex justify-start gap-[10px] pt-[30px]">
              <div className="left-left flex justify-start ml-[20px] mt-[5px]"><p>1</p></div>
              <div className="left-right">
                <p>STEP 1</p>
                <h2>YOUR INFO</h2>
              </div>
            </div>

            <div className="left flex justify-start gap-[10px] pt-[20px]">
              <div className="left-leftt flex justify-start ml-[20px] mt-[5px]"><p>2</p></div>
              <div className="left-right">
                <p>STEP 2</p>
                <h2>SELECT PLAN</h2>
              </div>
            </div>


            <div className="left flex justify-start gap-[10px] pt-[20px]">
              <div className="left-leftt flex justify-start ml-[20px] mt-[5px]"><p>3</p></div>
              <div className="left-right">
                <p>STEP 3</p>
                <h2>ADD-ONS</h2>
              </div>
            </div>

            <div className="left flex justify-start gap-[10px] pt-[20px]">
              <div className="left-leftt flex justify-start ml-[20px] mt-[5px]"><p>4</p></div>
              <div className="left-right">
                <p>STEP 4</p>
                <h2>SUMMARY</h2>
              </div>
            </div>

        

          </div>

          <div className="content-right pr-[80px] pt-[50px]">
            <div className="right-text flex justify-start"><h1>Personal Info</h1></div>
            <div className="right-title flex justify-start"><p>Please provide your name,email,adress and phone number.</p></div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inp-p flex justify-start pt-[25px]"><p>Name</p></div>
                    <div className="inp">
                      
                      <input
                        placeholder="e.g.Stephen King"
                        {...register("FirstName", { required: true })}
                      />
                      {errors.FirstName && (
                        <p style={{ color: "red" }}>This field is required</p>
                      )}
                    </div>

                    <div className="inp-p flex justify-start pt-[25px]"><p>Email Adress</p></div>
                    <div className="inp">
                      <input
                        type="email"
                        placeholder="e.g.stephenking@lorem.com"
                        {...register("Email", { required: true })}
                      />
                      {errors.Email && (
                        <p style={{ color: "red" }}>This field is required</p>
                      )}
                    </div>

                    <div className="inp-p flex justify-start pt-[25px]"><p>Phone Number</p></div>
                    <div className="inp">
                      <input
                        placeholder="e.g. +1 234 567 890"
                        type="number"
                        {...register("Number", { required: true })}
                      />
                      {errors.Password && (
                        <p style={{ color: "red" }}>This field is required</p>
                      )}
                    </div>

                    <div className="inp flex justify-end ">
                      <button className="green">Next Step</button>
                    </div>
                  </form>


          </div>
          
        </div>
        </div>




      </div>
    </div>
  );
}

export default App;
