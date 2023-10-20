import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { FaSchool, FaBriefcase, FaBrain, FaCode, FaTrophy, FaChevronUp, FaChevronDown, FaLinkedin, FaGithub, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import { useState } from 'react';
import MyImage from "./assets/images/me.JPG"
function Icon ({name}){
  const SIZE=22;
  if(name == "school") return <FaSchool size={SIZE} />
  if(name == "work") return <FaBriefcase size={SIZE} />
  if(name == "academic") return <FaCode size={SIZE} />
  if(name == "personal") return <FaBrain size={SIZE} />
  if(name == "achievements") return <FaTrophy size={SIZE} />
  if(name == "down") return <FaChevronDown size={SIZE} />
  if(name == "up") return <FaChevronUp size={SIZE} />

}

function HeaderText({icon, text}) {
  return (
    <div className='flex flex-row items-center text-left pl-4'>
      <Icon name={icon} />
      <span className='font-rubik font-bold text-[24px] pl-2'>{text}</span>
    </div>
  )
}

function SubHeaderText({isOpened, text}) {

  return (
    <div className='flex flex-row items-center text-left pl-4'>
      <span className='font-rubik font-regular text-[12px] pl-2'>{text}</span>
      <Icon name={isOpened? "up": "down"} />
    </div>
  )
}

function CustomCollabsible({children, title}) {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <Collapsible
      onTriggerOpening={() => setIsOpened(true)}
      onTriggerClosing={() => setIsOpened(false)}
      trigger={<SubHeaderText isOpened={isOpened} text={title} />}
    >
      {children}
    </Collapsible>
  )
}


function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="w-1/4 p-4 sticky top-0 bg-black">
          <div className=" relative w-60 h-auto">
            <img src={MyImage} className="w-full h-auto" />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t h-12 from-black to-transparent"></div>
          </div>
          <div>
            <div className='font-rubik font-black text-[24px] mt-8 text-white'>Ahmed Sharafeldin</div>
            <div className='font-rubik font-meduim text-[14px]  text-white'>Software Engineer</div>

          </div>
          <div className='flex flex-row justify-center gap-4 mt-8'>
            <a href='https://www.linkedin.com/in/ahmed-sharafeldin98/'>
              <FaLinkedin size={24}  color='white'/>
            </a>
            <a href='https://github.com/AhmedSharaf98'>
              <FaGithub size={24} color='white'/>
            </a>
            <a href='mailto:ahmedsharaf@aucegypt.edu'>
              <FaEnvelope size={24} color='white'/>
            </a>
            <a href='tel:+201024082232'>
              <FaPhoneSquare size={24} color='white'/>
            </a>
          </div>
        </div>
        <Scrollbars className="w-3/4 p-4 bg-red-50">
          <HeaderText icon="school" text="Education" />
          <CustomCollabsible title="The American University in Cairo">
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
            <p className='font-rubik font-bold'>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </CustomCollabsible>
          <HeaderText icon="work" text="Work Experience" />
          <HeaderText icon="academic" text="Academic Projects" />
          <HeaderText icon="personal" text="Personal Projects" />
          <HeaderText icon="achievements" text="Achievements" />
        </Scrollbars>
      </div>  
    </div>
  );
}

export default App;
