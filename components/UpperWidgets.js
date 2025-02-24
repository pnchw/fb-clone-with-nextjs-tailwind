import React from 'react'
import SponsoredCom from "./SponsoredCom";

const sponsorDetails = [
    {
        href:"https://singhaonline.com/?utm_medium=paid&utm_source=fb&utm_id=120216087148230537&utm_content=120216087148400537&utm_term=120216087148360537&utm_campaign=120216087148230537&fbclid=IwZXh0bgNhZW0BMABhZGlkAasX5PLr7bkBHezDMrgNjd-1cGAxGj9MmCvWxc2UdW4DiHOHMNOdd7_EsOmIgLui63aH6w_aem_xOAwEpIHF6XJZT7ruBS8ng",
        src:"/assets/images/sponsor/sponsor1.jpg",
        name: "Singha Online",
        detail: "singhaonline.com",
    },
    {
        href:"https://axial.acs.org/publishing/paving-the-way-toward-equity-in-open-access-publication-innovations-and-their-impact?utm_source=facebook&utm_medium=cpc&utm_campaign=IC004_ST0010R_T005329_0624_DMA_Open_Access_adverts&src=IC004_ST0010R_T005329_0624_DMA_Open_Access_adverts&fbclid=IwZXh0bgNhZW0BMABhZGlkAAAF_YISU64BHa9EiXjkFVuwV2RXIGlxyPKPIUz4DILzI0CIvVIUbzU_XWfYlgEMS4jDdA_aem_Cc_HJI7e4E-0OwVVe7BkeQ",
        src:"/assets/images/sponsor/sponsor2.jpg",
        name: "Increasing global equity in open access",
        detail: "axial.acs.org",
    }
];

function UpperWidgets() {
  return (
    <div className="flex flex-col shrink-1">
        <h2 className="text-xl text-gray-500 pl-2">Sponsored</h2>
        {sponsorDetails.map(sponsor => (
            <SponsoredCom 
                key={sponsor.name}
                href={sponsor.href}
                src={sponsor.src}
                name={sponsor.name}
                detail={sponsor.detail}
            />
        ))}
        <hr className="text-gray-300 my-2" />
    </div>
  )
}

export default UpperWidgets;