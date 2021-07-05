// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';


// // ****************************************************This is used from material ui stepper *********************************************************************
// const tutorialSteps = [
//     {
//         label: 'HTML',
//         imgPath:
//             "./myportfolio/html.jpeg",

//     },
//     {
//         label: 'CSS',
//         imgPath:
//             "./myportfolio/css.jpeg",
//     },
//     {
//         label: 'FULLSTACK WEB DEVELOPMENT',
//         imgPath:
//             "./myportfolio/fullstack.jpg",
//     },
//     {
//         label: 'DATA ANALYSIS',
//         imgPath:
//             './myportfolio/data.jpeg',
//     },
//     {
//         label: 'ZOTALAB',
//         imgPath:
//             './myportfolio/zotalab.jpeg',
//     },
// ];

// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: 800,
//         flexGrow: 1,
//     },
//     header: {
//         display: 'flex',
//         alignItems: 'center',
//         height: 50,
//         paddingLeft: theme.spacing(4),
//         backgroundColor: "#6184a8",
//         borderRadius: "5px 5px 0 0"
//     },
//     img: {
//         height: 400,
//         maxWidth: 800,
//         overflow: 'hidden',
//         display: 'block',
//         width: '100%',
//         borderRadius: "0 0 5px 5px"
//     },
// }));

// export default function TextMobileStepper() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [activeStep, setActiveStep] = React.useState(0);
//     const maxSteps = tutorialSteps.length;

//     const handleNext = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     return (
//         <div className="col-md-12 col-12 mx-auto mb-5">
//             <div className="stepper-section">
//                 <div className={classes.root}>
//                     <Paper square elevation={0} className={classes.header}>
//                         <Typography>{tutorialSteps[activeStep].label}</Typography>
//                     </Paper>
//                     <img
//                         className={classes.img}
//                         src={tutorialSteps[activeStep].imgPath}
//                         alt={tutorialSteps[activeStep].label}
//                     />
//                     <MobileStepper
//                         steps={maxSteps}
//                         position="static"
//                         variant="text"
//                         activeStep={activeStep}
//                         nextButton={
//                             <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//                                 Next
//                                 {theme.direction === 'rtl'}
//                             </Button>
//                         }
//                         backButton={
//                             <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                                 {theme.direction === 'rtl'}
//                                 Back
//                             </Button>
//                         }
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
