function Contact(){

const styles={

container:{
padding:"80px",
textAlign:"center"
},

img:{
width:"700px",
borderRadius:"15px",
margin:"30px 0"
},

box:{
background:"#f4f4f4",
padding:"30px",
width:"500px",
margin:"auto",
borderRadius:"10px"
}

};

return(

<div style={styles.container}>

<h1>Contact Us</h1>

<img
style={styles.img}
src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c"
/>

<div style={styles.box}>

<h3>📞 +91 9876543210</h3>

<h3>📍 Time 2 Shine Car Wash</h3>

<h3>✉ info@time2shine.com</h3>

</div>

</div>

);

}

export default Contact;