// import React from 'react'

function Values() {
    return (
        <div className='v-gradient p-[40px_20px] lg:p-[60px_20px] text-white flex items-center justify-center'>
            <div className="w-full grid lg:grid-cols-2 gap-[40px] lg:w-[80%]">
                <div>
                    <p className="text-white text-[56px]">Our Values</p>

                    <div className="mt-[10px] flex flex-col items-start space-y-[40px]">
                        <div>
                            <p className="text-[24px]">Transparency</p>
                            <p>We believe in clear, honest cross-border transactions. Every payment, every interaction is built on complete openness.</p>
                        </div>
                        <div>
                            <p className="text-[24px]">Innovation</p>
                            <p>Our cutting-edge technology drives our financial solutions. We continuously evolve to meet the dynamic needs of global businesses making a transaction in international markets.</p>
                        </div>
                        <div>
                            <p className="text-[24px]">Reliability</p>
                            <p>You can rely on our commitment to deliver excellent payment solutions, any day, any time! Our services are consistent, dependable and trustworthy.</p>
                        </div>
                        <div>
                            <p className="text-[24px]">Compliance</p>
                            <p>Navigating complex regulatory protocols is our expertise. We ensure every transaction meets the highest standards of legal and financial integrity so you can be at ease with every payment.</p>
                        </div>
                        <div>
                            <p className="text-[24px]">Client-Centricity</p>
                            <p>Your success is our mission. We love to see your business expand without borders with our seamless financial opportunities so we have designed solutions that are not just efficient, but perfectly tailored to your unique business needs.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <img className="" src="./values.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Values
