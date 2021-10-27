import React from 'react'

const Hire = () => {
    return (
        <section className={"bg-gray-900 body-font w-auto h-full bg-center overlay"}>
            <div className={""}>
                <div className={"flex justify-center"}>

                    <div className={"p-10"}>
                        <div className={" py-4 "}>
                            <div className={"bg-purple-500 py-10"}>
                                <h2 className={"text-white text-center text-4xl font-semibold mb-5"}>
                                    Chat with me!
                                </h2>
                                <p className={"text-white text-center text-md font-semibold mb-5"}>Replies within 24
                                    hours!</p>
                            </div>


                            <form name={"Feedback Form"} className={"flex flex-col bg-purple-200 px-10 py-5 rounded"}>
                                <input type={"text"} name={"username"} id={"username"}
                                       placeholder={"Enter your username"}
                                       required
                                       className={"py-2 px-4 mb-5 rounded border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"}/>
                                <input type={"email"} name={"email"} id={"email"} placeholder={"Enter your email"}
                                       required
                                       className={"py-2 px-4 mb-5 rounded border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"}/>
                                <textarea name={"textarea"} id={"textarea"} cols={"30"} rows={"10"}
                                          placeholder={"Write message"}
                                          required
                                          className={"py-2 px-4 mb-5 rounded border-solid border-purple-500 text-purple-500 placeholder-purple-500 font-semibold"}/>

                                <input type={"submit"} value={"submit"}
                                       className={"bg-purple-500 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-white hover:text-black"}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={" border-t-4 border-purple-500"}>
                    <iframe className={"w-screen h-96"}
                            src={"https://maps.google.com/maps?q=systempiloten&t=&z=13&ie=UTF8&iwloc=&output=embed"}/>
                </div>
            </div>

        </section>
    )
}
export default Hire