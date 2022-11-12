import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextField } from "../Core/UI/Controls/TextField";
import { addEmailList } from "../firebase/mailList";

interface IFORM {
  email: string;
}
const Home = () => {
  const schemaValidation = yup.object().shape({
    email: yup.string().email("Email is not valid").required("An email is required"),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<IFORM>({ mode: "onChange", resolver: yupResolver(schemaValidation) });
  const submitHandler = async (data: IFORM) => {
    try {
      await addEmailList(data);
    } catch (error) {
      setError("email", { type: "custom", message: error as string });
    }
  };

  return (
    <>
      <video
        className=" fixed top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto z-0 -translate-x-1/2 -translate-y-1/2"
        playsInline
        autoPlay
        muted
        loop>
        <source src="assets/mp4/bg.mp4" type="video/mp4" />
      </video>

      <div
        className=" relative overflow-hidden z-10 min-h-full flex justify-center items-center  before:absolute lg:w-[65vw]
      before:top-0
      before:bottom-0 
      before:right-0 
      before:left-0 
      before:h-full
      before:w-full
      before:bg-black/80
      before:lg:-skew-x-12
      before:origin-top-right
      ">
        <div className=" relative w-[40rem] lg:pl-8 lg:pr-36  py-20 lg:py-0 text-white">
          <div className="px-4 px-lg-0">
            <h1 className="fst-italic lg:text-[3.5rem] text-4xl leading-[4rem] mb-16">Our Website is Coming Soon</h1>
            <p className="mb-12 lg:text-[1.3rem]">
              We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!
            </p>

            <form id="contactForm" method="post" onSubmit={handleSubmit(submitHandler)}>
              {!isSubmitSuccessful && (
                <div className="flex flex-nowrap space-x-4 items-start">
                  <div className="col-auto flex-grow">
                    <TextField
                      register={register}
                      name="email"
                      errors={errors}
                      placeholder="Enter email address..."
                      aria-label="Enter email address..."
                      data-sb-validations="required,email"
                      className="block w-full px-4 py-4  text-black bg-white border rounded-md focus:border-gray-500  focus:outline-none"></TextField>
                  </div>
                  <div className="col-auto">
                    <button
                      className=" disabled:opacity-80 disabled:pointer-events-none bg-[#2a5555] border border-[#2a5555] p-[calc(1rem_+_2px)] tracking-widest rounded-md uppercase transition-colors  disabled"
                      id="submitButton"
                      disabled={!isValid}
                      type="submit">
                      Notify Me!
                    </button>
                  </div>
                </div>
              )}

              {isSubmitSuccessful && (
                <div id="submitSuccessMessage">
                  <div className="text-center mb-3 mt-2">
                    <div className="fw-bolder">Form submission successful!</div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="relative  z-10 lg:absolute lg:h-full lg:top-0 lg:right-10 lg:w-auto">
        <div className="flex flex-row lg:flex-col justify-center items-center h-full mt-3 lg:mt-0">
          <a
            className="inline-flex h-16 w-16 justify-center items-center text-white bg-black border-black border rounded-full p-0 m-4"
            href="https://github.com/engmrms"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="h-4 w-4" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            className="inline-flex h-16 w-16 justify-center items-center text-white bg-black border-black border rounded-full p-0 m-4"
            href="http://www.linkedin.com/in/mrmsaleh"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="h-4 w-4" viewBox="0 0 448 512">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a
            className="inline-flex h-16 w-16 justify-center items-center text-white bg-black border-black border rounded-full p-0 m-4"
            href="mailto:info@morabah.com"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="h-4 w-4" viewBox="0 0 512 512">
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
