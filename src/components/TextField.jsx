import React from "react";

export default function TextField({ label, textarea }) {
  return (
    <div className='flex flex-col gap-y-2.5 flex-1 w-full'>
      <label className='text-white text-sm text-center'>{label}</label>
      {!textarea ? (
        <input className='border-[2px] border-transparent focus:border-white outline-none text-center bg-dark text-white rounded-none flex-1 py-3 px-1' />
      ) : (
        <textarea
          className='border-[2px] border-transparent focus:border-white outline-none text-center bg-dark text-white rounded-none flex-1 py-3 px-1'
          rows='4'
          cols='50'
        />
      )}
    </div>
  );
}
