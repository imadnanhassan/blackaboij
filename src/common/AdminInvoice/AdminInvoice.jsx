import React from 'react'
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

export default function AdminInvoice() {

    const [downloadInvoice, setDownloadInvoice] = useState(false)
    const invoiceRef = useRef();

    // admin invoice download funtion product wise
    const adminInvoiceDownload = (id) => {

        setDownloadInvoice(true);

        // Generate PDF
        const element = invoiceRef.current;
        const options = {
            margin: 0.5,
            filename: `invoice_${id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        html2pdf()
            .from(element)
            .set(options)
            .save();
    };

    console.log(downloadInvoice)

    return (

        < div >
            <div ref={invoiceRef}>
                <div>
                    <div className="flex justify-between items-start pb-4 ">
                        <div>
                            <h1 className="text-2xl font-bold">Invoice #1234</h1>
                            <p className="text-xs">January 1, 2025</p>
                        </div>
                        <img
                            src="https://i.ibb.co/3sNL27c/logo.png"
                            className="w-[85px] h-[15px] grayscale-0"
                            alt=""
                        />
                    </div>


                    <div className="h-px bg-gray-300 my-4" />

                    {/* Billing Information */}
                    <div className='flex justify-between'>
                        
                        {/* Company Information */}
                        <div className="">
                            <p className="p-0 mb-1"><b>Blackaboij</b></p>
                            <p className="p-0 mb-1">1600 Pennsylvania Avenue NW,</p>
                            <p className="p-0 mb-1">Washington,</p>
                            <p className="p-0 mb-1">DC 20500,</p>
                            <p className="p-0 mb-1">United States of America</p>
                        </div>

                        <div>
                            <p className="p-0 mb-1"><b>Bill to:</b></p>
                            <p className="p-0 mb-1">Titouan LAUNAY</p>
                            <p className="p-0 mb-1">72 Faxcol Dr Gotahm City,</p>
                            <p className="p-0 mb-1">NJ 12345,</p>
                            <p className="p-0 mb-1">United States of America</p>
                        </div>
                    </div>
                    <div className="h-px bg-gray-300 my-4" />

                    <p className="p-0 leading-5">
                        All items below correspond to work completed in the month of January 2024.
                        Payment is due within 15 days of receipt of this invoice.
                    </p>

                    {/* Invoice Table */}
                    <table className="w-full my-12">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="text-left font-bold py-2">Item</th>
                                <th className="text-left font-bold py-2">Description</th>
                                <th className="text-left font-bold py-2">Unit Price</th>
                                <th className="text-left font-bold py-2">Quantity</th>
                                <th className="text-left font-bold py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-300 ">
                                <td className="py-2">1</td>
                                <td className="py-2">Onedoc Startup Subscription</td>
                                <td className="py-2">$100</td>
                                <td className="py-2">1</td>
                                <td className="py-2">$100</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <td className="py-2">2</td>
                                <td className="py-2">Onedoc support</td>
                                <td className="py-2">$0</td>
                                <td className="py-2">1</td>
                                <td className="py-2">$0</td>
                            </tr>
                            <tr className="border-b border-gray-300">
                                <th className="text-left font-bold py-2"></th>
                                <th className="text-left font-bold py-2">Total</th>
                                <th className="text-left font-bold py-2"></th>
                                <th className="text-left font-bold py-2"></th>
                                <th className="text-left font-bold py-2">$100</th>
                            </tr>
                        </tbody>
                    </table>

                    <div className="bg-blue-100 py-3 rounded-md border-blue-300 text-blue-800 text-sm text-center">
                        On January 1st 2024, Onedoc users will be upgraded free of charge to our new cloud offering.
                    </div>

                    <div>
                        <div className="h-px bg-gray-300 my-4" />

                    </div>
                </div>
            </div>

        </div >
    )
}

