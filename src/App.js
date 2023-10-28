import logo from './logo.svg';
import './App.css';
import Collapsible from 'react-collapsible';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { FaSchool, FaBriefcase, FaBrain, FaCode, FaTrophy, FaChevronUp, FaChevronDown, FaLinkedin, FaGithub, FaEnvelope, FaPhoneSquare } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import Typed from 'react-typed';

import MyImage from "./assets/images/me.jpg"
const Icon = ({name}) => {
  const SIZE=22;
  if(name == "school") return <FaSchool size={SIZE} />
  if(name == "work") return <FaBriefcase size={SIZE} />
  if(name == "academic") return <FaCode size={SIZE} />
  if(name == "personal") return <FaBrain size={SIZE} />
  if(name == "achievements") return <FaTrophy size={SIZE} />
  if(name == "down") return <FaChevronDown size={SIZE} />
  if(name == "up") return <FaChevronUp size={SIZE} />

}

const HeaderText = ({icon, text}) => {
  return (
    <div className='flex flex-row items-center text-left pl-4'>
      <Icon name={icon} />
      <span className='font-rubik font-bold text-[24px] pl-2'>{text}</span>
    </div>
  )
}

const SubHeaderText = ({isOpened, text}) => {

  return (
    <div className='flex flex-row items-center text-left pl-4'>
      <span className='font-rubik font-regular text-[12px] pl-2'>{text}</span>
      <Icon name={isOpened? "up": "down"} />
    </div>
  )
}

const CustomCollabsible = ({children, title}) => {
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

const App = () => {
  const scrollBarRef = useRef(null)
  const [terminalLineData, setTerminalLineData] = useState([
    "Hello There 😄!",
    "^500Welcome to my personal website",
    "^1000This is <b class='bg-white text-black'>Ahmed Sharafeldin</b>."
  ]);

  useEffect(() => {
    // scrollBarRef.current.scrollToBottom()
  }, [terminalLineData])


  const onInput = (input) => {
    if(input == "clear"){
      setTerminalLineData([])
      return
    }
    let output = "";
    switch(input){
      case "-h": output = "ed => education\nap => acedemic projects"; break;
      default: output = "Invalid Command"; break;        
    }
    setTerminalLineData([...terminalLineData, output])
  }

 
  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="w-1/4 p-4 sticky top-0 bg-black">
          <div className="relative w-48 h-auto mx-auto">
            <img src={MyImage} className="w-full h-auto mx-auto" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t h-12 from-black to-transparent"></div>
          </div>
          <div>
            <div className='font-rubik font-black text-[24px] mt-8 text-white'>Ahmed Sharafeldin</div>
            <div className='font-rubik font-meduim text-[14px]  text-white'>Software Engineer</div>

          </div>
          <div className='flex flex-row justify-center gap-4 mt-8'>
            <a href='https://www.linkedin.com/in/ahmed-sharafeldin98/'>
              <FaLinkedin className="w-6 h-6 hover:w-7 hover:h-7" color='white'/>
            </a>
            <a href='https://github.com/AhmedSharaf98'>
              <FaGithub className="w-6 h-6 hover:w-7 hover:h-7" color='white'/>
            </a>
            <a href='mailto:ahmedsharaf@aucegypt.edu'>
              <FaEnvelope className="w-6 h-6 hover:w-7 hover:h-7" color='white'/>
            </a>
            <a href='tel:+201024082232'>
              <FaPhoneSquare className="w-6 h-6 hover:w-7 hover:h-7" color='white'/>
            </a>
          </div>
        </div>
        <div className='flex flex-1 bg-black p-12 pl-0'>
         <div className="flex flex-1 text-start">
         {/* <Scrollbars className="h-16" ref={(ref) => scrollBarRef.current = ref }> */}
            <Terminal name='Ahmed Sharafeldin Personal Website' colorMode={ ColorMode.Dark } onInput={onInput}>
              {/* <div className='h-full'>
                  <div> */}
                    {terminalLineData.map((el, ind) => {
                      console.log(el)
                      return (
                        <TerminalOutput key={ind}>
                          <Typed
                            startDelay={500}
                            strings={[el]}
                            typeSpeed={20}
                            showCursor={false}
                          >
                            <span className='break-words' />
                          </Typed>
                        </TerminalOutput>
                      )} 
                    )}
                  {/* </div>
              </div> */}
            </Terminal>
            {/* </Scrollbars> */}

          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
