export default function RadioInput({ handleRadio, getMessage }) {
  return (
    <div className="bg-white py-4 px-5 w-1/2 rounded-lg flex flex-col">
      <div className="flex justify-around">
        <div>
          <input
            type="radio"
            id="affirmation"
            name="quote-type"
            value="affirmation"
            className="mr-2.5"
            onClick={handleRadio}
          />
          <label htmlFor="affirmation" className="text-black italic">
            affirmation
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="mantra"
            name="quote-type"
            value="mantra"
            className="mr-2.5"
            onClick={handleRadio}
          />
          <label htmlFor="mantra" className="text-black italic">
            mantra
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-dark-blue rounded-md px-5 mt-4 w-48"
          onClick={getMessage}
        >
          Receive Message
        </button>
      </div>
    </div>
  );
}
