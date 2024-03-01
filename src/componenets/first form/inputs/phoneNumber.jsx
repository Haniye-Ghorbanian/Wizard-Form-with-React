export default function PhoneNumInput() {
    return (
        <div className=" group relative h-10 w-full">
        <div className="peer">
          <input
            type="text"
            id="phone"
            className="myInput mt-1 w-full h-9 outline-none border border-solid pt-4 pb-3.5 text-sm px-3  caret-blue-600 rounded-sm "
          />
        </div>
        <label
          htmlFor="phone"
          className="move absolute text-sm bottom-2 mr-2 transition-all duration-500 ease-in-back peer-has-[:focus]:bottom-7 peer-has-[:focus]:bg-white cursor-text text-gray-400 peer-has-[:focus]:text-blue-400 peer-has-[:focus]:pl-3 peer-has-[:focus]:pr-1"
        >
          شماره موبایل
        </label>
      </div>
    );
  }