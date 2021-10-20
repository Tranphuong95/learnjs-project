import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import NavBars from './components/nav-bar/NavBars'
import './App.css';
import SlideShow from './components/slide-show/SlideShow';
import ClassComponent from './components/class-component/ClassComponent';


const Button=({children, ...rest})=>{
  return <button  {...rest} >{children}</button>
}
function App() {
  const [imageIsExist, setImageIsExist]=useState(false);
  const [point, setPoint]=useState(0);
  const [number, setNumber]=useState(30)
  useEffect(()=>{
    fetch('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAPmg07.img?h=532&w=799&m=6&q=60&o=f&l=f&x=260&y=260', {
      method: "GET"
    }).then(res=>setImageIsExist(res.ok))
    .catch(error=>console.log(error))
  }, [])
  const student={
    firstName: "Phong",
    lastName: "Thuy",
    age: 16,
    class: "10A",
    getFullName(){
      return this.firstName+" "+this.lastName;
    }
  }
  delete student.class;
  useEffect(()=>{
    const coundown=setTimeout(()=>{
      setNumber((number)=>--number)
    },[1000]);
    if(number<=0) clearTimeout(coundown)
    return ()=>{
      clearTimeout(coundown)
    }
  },[number])
  const handleClick=()=>{
    alert("hello")
  }
  const handleChangeInput=(e)=>{
    const regex=/[0-9]{9,12}$/
    console.log("regex:",regex.test(e.target.value), e.target.value.length)
    setPoint(e.target.value)
  }
  // 0-50: 800;
  // 51-100: 980;
  // 101-200: 1200;
  // 201-400: 1600;
  // >401: 1800;
  const getMoney=(point)=>{
    if(!point || point<=0) return 0;
    if(point<=50){
      return point*800;
    }
    if(50<point && point<=100){
      return 50*800+(point-50)*980
    }
    if(100<point && point<=200){
      return 50*800+50*980+ (point-100)*1200
    }
    if(200<point && point<=400){
      return 50*800+50*980+100*1200+(point-200)*1600
    }
    if(point>400){
      return 50*800+50*980+100*1200+200*1600+(point-400)*1800
    }
  }
  const arr=[{name: "H", age: 10}, {name: "B", age: 12}]
  const arr1=arr.forEach((x, i)=>({
    ...x,
    m: x.age + Number(i),
  }));
  const arr2=arr.map((x, i)=>({
    ...x,
    m: x.age + Number(i)
  }));
  const arr3=arr.map(x=>{
    delete x.age;
    return x
  })
  const array=[
    {
      month: 1,
      name: "Thang 1", 
      thu: 2,
      chi: 3
    },
    {
      month: 2,
      name: "Thang 2", 
      thu: 5,
      chi: 4
    },
    {
      month: 3,
      name: "Thang 3", 
      thu: 7,
      chi: 3
    },
    {
      month: 4,
      name: "Thang 4", 
      thu: 6,
      chi: 4
    },
    {
      month: 5,
      name: "Thang 5", 
      thu: 5,
      chi: 5
    },
    {
      month: 6,
      name: "Thang 6", 
      thu: 4,
      chi: 3
    },
    {
      month: 7,
      name: "Thang 7", 
      thu: 8,
      chi: 7
    },
    {
      month: 8,
      name: "Thang 8", 
      thu: 3,
      chi: 3
    },
    {
      month: 9,
      name: "Thang 9", 
      thu: 3,
      chi: 5
    },
    {
      month: 10,
      name: "Thang 10", 
      thu: 12,
      chi: 7
    },
    {
      month: 11,
      name: "Thang 11", 
      thu: 6,
      chi: 6
    },
    {
      month: 12,
      name: "Thang 12", 
      thu: 4,
      chi: 4
    }
  ]
  const convertData=(arr)=>{
    let result=[];
    let thu={};
    let chi={};
    thu.groupName="Thu";
    chi.groupName="Chi";
    Array.isArray(arr) && arr.forEach((x, i)=>{
      thu[`month_${x.month}`]=x.thu;
      chi[`month_${x.month}`]=x.chi;
    })
    result.push(thu, chi);
    return result;
  }
  const cvArray=convertData(array);
  const numberArr=[1,2,,,,3,4];
  let increatment=0
  numberArr.forEach(x=>{
    increatment++;
  })
  numberArr.map(x=>{
    // increatmen++;
    return x
  })
  function Counter() {
    this.sum = 0
    this.count = 0
  }
  Counter.prototype.add = function(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry
      ++this.count
    }, this)
  }
  
  const obj = new Counter()
  obj.add([2, 5, 9]);
  // 3
  const widths=[{
    name: "tabl", 
    width: 30
  },
  {
    name: "tab2", 
    width: 40
  },
  {
    name: "tab3", 
    width: 35
  },
  {
    name: "tab4", 
    width: 45
  },
  {
    name: "tab5", 
    width: 38
  },
  {
    name: "tab6", 
    width: 44
  },
  {
    name: "tab7", 
    width: 36
  },
  {
    name: "tab8", 
    width: 20
  },
  {
    name: "tab9", 
    width: 21
  },
  {
    name: "tab10", 
    width: 22
  },]
//page 1: width=80;
//page 2: width=100;
const convertTabs=(widths)=>{
  const firstPage={width: 80, tabs:[], totalWidth: 0};
  const newPage={width: 100, tabs: [], totalWidth: 0}
  const pages=[];
  pages.push(firstPage)
  widths.forEach((x, i) => {
    if(pages[pages.length-1].totalWidth+x.width<pages[pages.length-1].width){
      pages[pages.length-1].tabs.push(x);
      pages[pages.length-1].totalWidth+=x.width
    }else{
      const nextPage=JSON.parse(JSON.stringify(newPage));
      pages.push(nextPage)
      // pages.push({width: 100, tabs: [], totalWidth: 0});
      pages[pages.length-1].tabs.push(x);
      pages[pages.length-1].totalWidth+=x.width
    }
  });
  return pages
}
console.log("page1:", convertTabs(widths))

  return (
    <div className="App">
      <NavBars/>
      <SlideShow/>
    <Button onClick={handleClick} style={{color: "green"}}>Hello</Button>
    <h3>{imageIsExist===true? "Image": "Khong co anh"}</h3>
    {number===0?<h1>HET GIO</h1>: <h1>{number}</h1>}
    <input type="number" name="point" value={point} onChange={handleChangeInput} />
    {/* <button onClick={()=>getMoney(point)}>Tinh tien</button> */}
    <h3>Thanh tien: {getMoney(point)}</h3>
    <ClassComponent/>
    </div>
  );
}

export default App;
