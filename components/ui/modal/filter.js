
'use client'

export function FilterModal() {

    return(
        <>
            <div className="hidden lg:p-20" id="filter-setting" uk-modal="">   
            <div className="uk-modal-dialog tt relative overflow-hidden mx-auto bg-white p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">

                <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
                    <h2 className="text-md font-medium"> Filter Setting </h2>
                    
                    <button type="button" className="absolute top-0 right-0 m-2.5 uk-modal-close-outside">
                        <ion-icon name="close-outline" class="text-2xl"></ion-icon>
                    </button>

                </div>
                        
                <div className="space-y-5 mt-7">
                    <div> 
                    <label htmlFor="gender" className="text-base">I&apos;m Looking For :</label>
                            <select id="gender" name="gender" className="w-full mt-3">
                                <option value="Male">Man</option>
                                <option value="Female">Women</option>
                                <option value="Lesbian">Lesbian</option>
                                <option value="Gay">Gay</option>
                                <option value="Bisexual">Bisexual</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Queer">Queer</option>
                            </select>
                    </div>

                    <div>  
                    <label htmlFor="" className="text-base">Between Ages :</label>
                    <div className="grid grid-cols-2 gap-2">
                            <select id="age-fist" name="age-fist" className="mt-3">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>
                            <select id="age-end" name="age-end" className="mt-3">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">

                        <div className="flex items-start gap-2">
                            <ion-icon name="male-female-outline" class="text-3xl text-pink-400  rounded-full bg-blue-50 dark:bg-transparent"></ion-icon>
                            <p className="text-sm text-gray-500 font-medium"> Looking for with your Perfect Match </p>
                        </div>

                        <button type="button" className="button bg-blue-500 text-white px-8"> Setup</button>
                    </div>
                </div>            
            </div>
            </div>


            <div className="hidden lg:p-20" id="location-setting" uk-modal="">   
            <div className="uk-modal-dialog tt relative overflow-hidden mx-auto bg-white p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">

                <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
                    <h2 className="text-md font-medium"> Location Setting </h2>                    
                    <button type="button" className="absolute top-0 right-0 m-2.5 uk-modal-close">
                    <ion-icon name="close-outline" class="text-2xl"></ion-icon>
                    </button>
                </div>
                        
                    <div className="space-y-5 mt-7">
                    <div> 
                    <label htmlFor="gender" className="text-base">Select Country :</label>
                            <select id="gender" name="gender" className="w-full mt-3">
                                <option value="Thailand">Thailand</option>
                                <option value="China">China</option>
                                <option value="UK">United Kingdom</option>  
                                <option value="USA">United States of America</option>                               
                            </select>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <div className="flex items-start gap-2"> 
                            <ion-icon name="earth-outline" class="text-3xl text-blue-400  rounded-full bg-blue-50 dark:bg-transparent"></ion-icon>
                            <p className="text-sm text-gray-500 font-medium"> Choose a location your target </p>                           
                        </div>
                        <button type="button" className="button bg-pink-500 text-white px-8"> Setup</button>
                    </div>

                    </div>
                </div>
            </div>
                
        </>
    )
}