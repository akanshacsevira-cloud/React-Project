import { Link } from "react-router-dom";

function Header(){

const styles={

header:{
display:"flex",
justifyContent:"space-between",
padding:"20px 80px",
background:"#111",
alignItems:"center"
},

nav:{
display:"flex",
gap:"30px"
},

link:{
color:"white",
textDecoration:"none"
}

};

return(

<header style={styles.header}>

<h2 style={{color:"white"}}>
Time 2 Shine
</h2>

<nav style={styles.nav}>

<Link style={styles.link} to="/">
Home
</Link>

<Link style={styles.link} to="/about">
About
</Link>

<Link style={styles.link} to="/services">
Services
</Link>

<Link style={styles.link} to="/contact">
Contact
</Link>

</nav>

</header>

);

}

export default Header;