function About() {

const styles = {
container:{
padding:"80px",
textAlign:"center",
background:"#fff"
},

img:{
width:"700px",
borderRadius:"12px",
marginTop:"30px"
},

text:{
width:"70%",
margin:"30px auto",
fontSize:"18px"
}
};

return(
<div style={styles.container}>

<h1>About Time 2 Shine</h1>

<img
style={styles.img}
src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
/>

<p style={styles.text}>
Time 2 Shine provides premium washing,
detailing and eco-friendly services
for keeping vehicles spotless.
</p>

</div>
);
}

export default About;