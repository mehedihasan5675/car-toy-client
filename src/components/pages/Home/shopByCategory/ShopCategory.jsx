import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCart from "./shopCart";

const ShopCategory = () => {
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch(`./data/shop.json`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[])
  return (
    <div className="">
      <h3
        style={{ borderBottomRightRadius: "40px", borderTopLeftRadius: "40px" }}
        className="font-bold text-2xl md:text-4xl italic tracking-wider text-center  px-5 py-2 bg-[#C4DFDF] text-gray-600 w-1/2 mx-auto  "
      >
        Shop by category
      </h3>

      <div className="max-w-7xl mx-auto  px-5">
        <Tabs>
          <TabList style={{ borderBottomRightRadius: "40px", borderTopLeftRadius: "40px" }} className="bg-[#D2E9E9] mb-5 px-2 py-2 ">
            <Tab>Sports Cars</Tab>
            <Tab>Regular Cars</Tab>
            <Tab>Mini Police Cars</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-2 gap-5  lg:grid-cols-3 justify-center">
                {
                    toys.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 gap-5  lg:grid-cols-3 justify-center">
                {
                    toys.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 justify-center">
                {
                    toys.slice(0,3).map((toy,i)=><ShopCart toy={toy} key={i}></ShopCart>)
                }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
