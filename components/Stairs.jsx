import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//  calculate the reserve index fot staggred delay

const reverseIndex = (index) => {
  const totalSteps = 6; //number of Steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render o motion divs, each representing o step of the stairs 
  Each div will have tha same animation defined by the stairsAnimation object.
  The delay for each div is calculated sinamically based  on its reserved index,
  creating o staggered effect with decreasing delay for each subsequent step.
  */}
      {[...Array(6)].map((_, index) => {
         return (
          <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
         );
      })}
    </>
  );
};
export default Stairs;
