import React from 'react'
import { imageUrl } from '../../utils'
function ProductionCompanies({ companies }) {
    return (
        <>
            <p className="mt-6 mb-6 text-nice-red text-sm sm:text-md sm:text-left">Production Companies : </p>
            <div className="mb-14 grid grid-cols-2 sm:grid-cols-4 w-full justify-items-center place-items-center gap-6 place-content-center ">
                {
                    companies.map(
                        (company, index) => {
                            if (!company.logo_path) return null;
                            return (
                                <div key={index + "logo"} className="h-24">
                                    <img
                                        src={imageUrl + company.logo_path}
                                        alt={company.name + " logo"}
                                        className="w-full h-full"
                                    />
                                </div>)
                        })
                }
            </div>
        </>
    )
}

export default ProductionCompanies
