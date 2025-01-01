"use client"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Body = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    try {
      const passwords = localStorage.getItem("passwords");
      setpasswordArray(passwords ? JSON.parse(passwords) : []); // Use empty array if no passwords exist
    } catch (error) {
      // console.error("Error parsing passwords from localStorage:", error);
      setpasswordArray([]); // Fallback to an empty array in case of error
    }
  }, []);
  

  const copyText = (text) => {
    toast.success('Copied to Clipboard!', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 6) {
      setpasswordArray([...passwordArray, {...form, id: uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      console.log([...passwordArray, form])
      setform({ site: "", username: "", password: "" })

      toast.success('Password Saved!', {
        });
  
    }
    else {
      toast.error('Error: Invalid Input!', {
        
        });
  
    }
  }

  const editPassword = (id) => {
    setform(passwordArray.filter(i=>i.id===id)[0])
    setpasswordArray(passwordArray.filter(i=>i.id!==id))
  }

  const deletePassword = (id) => {
    toast('Password Deleted!', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(setpasswordArray(passwordArray.filter(item=>item.id!==id))))
  }



  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex justify-center items-center flex-col mt-12 sm:mt-8">
        <h1 className="font-bold text-4xl"> &lt;Pass<span className="text-green-500">OP</span>/&gt;</h1>
        <span>Your Own Password Manager</span>
        <div className="mt-12 flex flex-col items-center">
          <input name="site" value={form.site} onChange={handleChange} className="px-4 w-[40rem] mx-4 rounded-3xl border border-green-500 focus:bg-green-100 focus:outline-none sm:w-[80vw]" type="text" placeholder="Enter Your URL" />
          <div className="mt-6 sm:mt-4 sm:flex sm:items-center sm:justify-center sm:flex-col">
            <input name="username" value={form.username} onChange={handleChange} className="px-4 w-[26rem] mx-2 rounded-3xl border border-green-500 focus:bg-green-100 focus:outline-none sm:w-[80vw]" type="text" placeholder="Enter Username" />
            <input name="password" value={form.password} onChange={handleChange} className="px-4 mx-2 rounded-3xl border border-green-500 focus:bg-green-100 focus:outline-none sm:w-[80vw] sm:mt-4" type="password" placeholder="Enter Password" />
          </div>
          <script src="https://cdn.lordicon.com/lordicon.js" defer></script>
          <button onClick={savePassword} className="mt-8 bg-green-400 font-bold py-1 px-4 flex items-center gap-1 rounded-3xl">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              style={{ width: '26px', height: '26px' }}>
            </lord-icon>
            <span>Save Password</span>
          </button>
        </div>

        <div>
            <h2 className="font-bold text-2xl my-5">Your Saved Passwords</h2>
            {passwordArray.length === 0 && <div className="w-[80vw]">Wow, such empty</div>}
            {passwordArray.length != 0 &&
              <table className=" w-[90vw] table-fixed rounded-md overflow-hidden mb-10 ">
                <thead className='bg-green-800 text-white'>
                  <tr className="text-center">
                    <th>Site</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return <tr key={index} className="text-center">
                      <td><div className='flex items-center justify-center sm:overflow-scroll'>
                        <span>{item.site}</span>
                        <div className='lordiconcopy size-7 cursor-pointer sm:hidden' onClick={() => { copyText(item.site) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div></td>
                      <td><div className='flex items-center justify-center sm:overflow-scroll'>
                        <span>{item.username}</span>
                        <div className='lordiconcopy size-7 cursor-pointer sm:hidden' onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div></td>
                      <td><div className='flex items-center justify-center sm:overflow-scroll'>
                        <span>{'*'.repeat(item.password.length)}</span>
                        <div className='lordiconcopy size-7 cursor-pointer sm:hidden' onClick={() => { copyText(item.password) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="hover" >
                          </lord-icon>
                        </div>
                      </div></td>
                      <td className='justify-center py-2 text-center'>
                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </span>
                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ "width": "25px", "height": "25px" }}>
                          </lord-icon>
                        </span>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>}
          </div>

      </div>
    </>
  )
}

export default Body
