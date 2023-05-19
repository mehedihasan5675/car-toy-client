import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import market from "../../../../assets/market.json";
import truck from "../../../../assets/truck.json";
import ShopCart from "./shopCart";
const ShopCategory = () => {
    const [toys,setToys]=useState([])
    const [categoryName,setCategoryName]=useState('Sports Cars')
    const handleCategoryName=(cateName)=>{
      setCategoryName(cateName)

    }
    console.log(categoryName);

    useEffect(()=>{
        fetch(`http://localhost:5000/alltoys/${categoryName}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[categoryName])
  return (
    <div className="pt-24 pb-16">
      <h3
        style={{ borderBottomRightRadius: "40px", borderTopLeftRadius: "40px" }}
        className="font-bold text-2xl md:text-4xl italic tracking-wider text-center  px-5 py-2 bg-[#C4DFDF] text-gray-600 w-1/2 mx-auto  "
      >
        Shop by category
      </h3>
      
      <div className="max-w-7xl relative mx-auto  px-5">
      <div className="absolute -top-40 left-0 md:-top-44 md:left-32">
      <Lottie 
          animationData={truck} className="w-52 h-52" loop={true}></Lottie>
      </div>
      <div className="absolute -top-40 right-0">
      <Lottie 
          animationData={market} className="w-44 h-44" loop={true}></Lottie>
      </div>
        <Tabs >
        
          <TabList style={{ borderBottomRightRadius: "40px", borderTopLeftRadius: "40px" }} className="bg-[#D2E9E9] mb-5 px-2 py-2 ">
            <Tab onClick={()=>handleCategoryName("Sports Cars")}>Sports Cars</Tab>
            <Tab onClick={()=>handleCategoryName("Regular Cars")}>Regular Cars</Tab>
            <Tab onClick={()=>handleCategoryName("Mini Police Cars")}>Mini Police Cars</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5  lg:grid-cols-3 justify-center">
                {
                    toys?.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 gap-5  lg:grid-cols-3 justify-center">
                {
                    toys?.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 justify-center">
                {
                    toys?.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
