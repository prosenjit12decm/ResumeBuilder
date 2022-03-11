import React, { useState, useEffect } from 'react'
import style from './../Styles/finalpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { finalaction } from '../Actions/FinalPageAction'
import jsPDF from 'jspdf'
import SidebarTemplates from './SidebarTemplates'
// import { useReactToPrint } from 'react-to-print'



export default function FinalPage() {
    const { senddata, workexpred, edureducer, skillred, summred } = useSelector((state) => state)
    const finalReducer = useSelector((state) => state.finalReducer)
    const [doc, setDoc] = useState(finalReducer.document)
    const dispatch = useDispatch();
    const colorClass = 'color-' + doc.color;
    const fontWClass = 'fontw' + doc.fweight;
    const fontSClass = 'fsize' + doc.fsize;

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value)
        setDoc({
            ...doc,
            [name]: value
        })
        console.log(doc)

    }

    useEffect((e) => {
        dispatch(finalaction(doc));
    }, [doc])

    let colorArr = [1, 2, 3, 4, 5, 6]
    let fwArr = [1, 2, 3, 4, 5, 6]
    let fsArr = [1, 2, 3]


    function generatePdf() {
        var doct = new jsPDF("p", "pt")
        // doct.save("Generate.pdf")
        doct.html(document.querySelector('#dwnlpdf'), {
            callback: function (pdf) {
                var pageCount = doct.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                // pdf.save("New_Download.pdf")
                pdf.save("/files/myPdf.pdf")
            }
        })
    }

    function openSlidebar(){
        setOpen(true)
    }

    return (
        <div className={style.mainsection}>

            <div id='dwnlpdf' className={`${style.docsection}  ${fontWClass}`}>

                <div className={style.header}>
                    <div style={{ display: "flex" }}>
                        <div className={`${style.headimg} ${colorClass}`}>
                            {
                                senddata.name.charAt(0)
                            }
                        </div>
                        <div className={style.headname}>
                            <h2>{senddata.name}</h2>
                        </div> </div>
                    <div className={`${style.headaddress} ${fontSClass}`}>
                        {senddata.streetAddress}, {senddata.city}, {senddata.country}, {senddata.phonenumber}, {senddata.email}
                    </div>
                </div>


                <div className={style.summary}>
                    <div className={`${style.summaryhead} ${colorClass}`}>PROFESSIONAL SUMMARY</div>
                    <div className={`${style.summarydetail} ${fontSClass}`}>
                        {summred.profsummary}
                    </div>
                </div>
                <div className={style.skill}>
                    <div className={`${style.skillhead} ${colorClass}`}>SKILLS</div>
                    <div className={`${style.skilldetail}`}>
                        <div className={fontSClass}>
                            <li>{skillred.skillf}</li>
                            <li>{skillred.skillse}</li>
                            <li>{skillred.skillt}</li>
                        </div>
                        <div className={fontSClass}>
                            <li>{skillred.skillfo}</li>
                            <li>{skillred.skillfi}</li>
                            <li>{skillred.skillsi}</li>
                        </div>
                    </div>
                </div>
                <div className={style.experience}>
                    <div className={`${style.exphead} ${colorClass}`}>EXPERIENCE</div>
                    <div className={`${style.jobtitle} ${fontSClass}`}>
                        {workexpred.jobtitle}
                        <div className={`${style.jobdate} ${fontSClass}`}>{workexpred.startdate}  -  {workexpred.enddate}</div>
                    </div>
                    <div className={fontSClass}>
                        {workexpred.company}  |  {workexpred.city}, {workexpred.country}
                    </div>
                    <div className={fontSClass}>
                        {workexpred.description}
                    </div>
                </div>
                <div className={style.education}>
                    <div className={`${style.eduhead} ${colorClass}`}>EDUCATION</div>
                    <div className={`${style.educationclg} ${fontSClass}`}>{edureducer.degree}</div>
                    <div className={`${style.educationscl} ${fontSClass}`}>{edureducer.schoolname}</div>
                </div>
                <button>+ADD NEW SECTION</button>
            </div>








            <div className={style.editsection}>
                <SidebarTemplates/> 
                        <div className={style.editheader}>
                    <h1>Here's Your Resume!</h1>
                    <p>what do you want to do next?</p>
                    <h3>Export Options</h3>
                    <button onClick={generatePdf} id='btn' style={{ backgroundColor: '#8cc53e' }}>Download</button><br />
                    <button style={{ backgroundColor: '#03acbb' }}>Print</button><br />
                    <button style={{ backgroundColor: '#03acbb' }}>Email</button>
                </div>
                <div className={style.editcontent}>
                    <h3>Formatting Options</h3>
                    <p>Layout</p>
                    <div className={style.editcontentbtn}>
                        <button>CONDENSED</button>
                        <button>STANDARD</button>
                        <button>EXPANDED</button>
                    </div>
                    <div className={style.editcontentfont}>
                        <div className={style.cntfnt}>
                            <label>Font Style</label><br />
                            <select name='fweight' onClick={handleChange}>
                                {
                                    fwArr.map(ele => (
                                        <option value={ele} className={`fontw${ele}`}>Font-Family {ele}</option>
                                    ))
                                }

                            </select>
                        </div>
                        &nbsp;
                        &nbsp;

                        <div className={style.cntfnt}>
                            <label>Font Size</label><br />
                            <select name='fsize' onClick={handleChange}>
                                {
                                    fsArr.map(ele => (
                                        <option value={ele} className={`fsize${ele}`}>Font-Size{ele}</option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>
                    <br />
                    <div className={style.colorbtn}>
                        {
                            colorArr.map(ele => (
                                <button name='color' value={ele} onClick={handleChange} className={`color-${ele}`} ></button>
                            ))
                        }

                    </div>

                </div>
                <div className={style.editfooter}>
                    <button>+Add New Section</button><br />
                    <button onClick={openSlidebar}>Change Template</button>
                </div>
            </div>
        </div>
    )

}





// function generatePdf(){
//     var doc = new jsPDF("p", "pt", "a4")
//     doc.html(document.querySelector('#downloadPdf'), {
//       callback: function(pdf){
//         var pageCount = doc.internal.getNumberOfPages();
//         pdf.deletePage(pageCount);
//         pdf.save("/files/myPdf.pdf")
//       }
//     })
//   }



// React
// Redux
// thunk

// css
// sass
// bootstrap

// HTML
// Html5
// DOM Api
// AJAX

// Web Apis
// Google map api,
// Google Auth/Api

// sql
// firebase
// mongo
// postgress

// moments
// htmlto pdf

// DataStructures and Algorthims
// Java

// OOPS

