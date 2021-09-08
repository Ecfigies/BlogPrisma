const Carrosel = () => {
  function nextSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("-translate-x-full");

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove("translate-x-full");
    nextSlide.classList.add("translate-x-0");
  }

  function previousSlide() {
    let activeSlide = document.querySelector(".slide.translate-x-0");
    activeSlide.classList.remove("translate-x-0");
    activeSlide.classList.add("translate-x-full");

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove("-translate-x-full");
    previousSlide.classList.add("translate-x-0");
  }

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 w-screen h-screen bg-white-500 text-black flex items-center justify-center  transition-all ease-in-out duration-1000 transform translate-x-0 slide">
          <section className="flex items-center h-full">
            <div className="text-left p-10">
              <h1 className="text-5xl font-bold leading-none -mr-24 mb-10">
                Flowers delivery
                <br />
                in moscow
              </h1>
              <p className="pl-30 mb-10">Created by Name</p>
            </div>
          </section>
        </div>

        <div
          onClick={nextSlide}
          className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black"
        >
          &#x276F;
        </div>
        <div
          onClick={previousSlide}
          className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black"
        >
          &#x276E;
        </div>
      </div>
    </>
  );
};

export default Carrosel;
