import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5
        }
    }
}
const nextVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
}
const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];
    return (
        <motion.div className="base container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"


        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li whileHover={{ scale: 1.1, color: "yellow", textShadow: "0px 0px 8px red", originX: 0, }} transition={{ duration: 0.3 }} key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div variants={nextVariants} initial="hidden" animate="visible" className="next">
                    <Link to="/toppings">
                        <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgb(255,255,255)", boxShadow: "0px 0px 10px rgb(255,255,255)" }} transition={{ duration: 0.2, type: "spring" }}>Next</motion.button>
                    </Link>
                </motion.div>
            )}

        </motion.div>
    )
}

export default Base