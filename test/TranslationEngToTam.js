import React, { useEffect, useState } from "react";
import Translation from './Data.json';
import './TranslationEngToTam.css'

function TranslationEngToTamil(){
    const [language,setLanguage]=useState("hindi")
    const [content,setContent]=useState({})

    useEffect(()=>{
        if(language=="english"){
            setContent(Translation.english)
        }else if(language=="tamil"){
            setContent(Translation.tamil)
        }else if(language=="sinhala"){
            setContent(Translation.sinhala)
        }
    })
   
    return(
        <div className="translation-container">
            <select className="select-language" value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
                <option>english</option>
                <option>tamil</option>
                <option>sinhala</option>
            </select>

            <div className="content">
                <h2>{content.Title}</h2>
                <span>{content.Description}</span>
            </div>
        </div>
    );
}
export default TranslationEngToTamil;
