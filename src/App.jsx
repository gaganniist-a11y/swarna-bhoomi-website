
import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{fontFamily:"Arial, sans-serif", background:"#fff7ed"}}>
      <section style={{padding:"80px 20px", textAlign:"center"}}>
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          style={{fontSize:"48px", marginBottom:"10px"}}>
          Swarna Bhoomi <span style={{color:"#d97706"}}>Premium Aata</span>
        </motion.h1>
        <div style={{color:"#b45309", fontWeight:"600"}}>Fresh Aata, On Demand.</div>
        <p style={{maxWidth:"700px", margin:"20px auto", fontSize:"18px"}}>
          Washed wheat, stone‑ground on traditional chakki only after you order.
          No chemicals, no preservatives. Delivered within 24 hours in Indore.
        </p>
        <a href="https://wa.me/918770814118" target="_blank">
          <button style={{padding:"12px 24px", borderRadius:"25px", border:"none", background:"#d97706", color:"white", fontSize:"16px"}}>
            Order on WhatsApp
          </button>
        </a>
      </section>

      <section style={{background:"white", padding:"60px 20px", textAlign:"center"}}>
        <h2>Why Swarna Bhoomi?</h2>
        <p>🌾 Washed wheat • 🪨 Stone ground • 🥖 Fresh on order • 🚫 No preservatives • 🚚 24 hour delivery</p>
      </section>

      <section style={{padding:"60px 20px", textAlign:"center"}}>
        <h2>Order Fresh Aata</h2>
        <p><b>Currently serving: Indore</b></p>
        <p>Available packs: 5kg and 10kg</p>
        <a href="https://wa.me/918770814118" target="_blank">
          <button style={{padding:"12px 24px", borderRadius:"25px", border:"none", background:"#92400e", color:"white", fontSize:"16px"}}>
            Place Order
          </button>
        </a>
      </section>

      <footer style={{background:"#d97706", color:"white", textAlign:"center", padding:"20px"}}>
        © {new Date().getFullYear()} Swarna Bhoomi Premium Aata. All rights reserved.
      </footer>
    </div>
  )
}
