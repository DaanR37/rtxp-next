// import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Textarea, useToast } from "@chakra-ui/react";
// import { useState } from "react";
// import { sendContactForm } from "../lib/api";


// const initValues = {
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
// };

// const initState = { values: initValues };

export default function Form() {
    // const toast = useToast();
    // const [state, setState] = useState(initState);
    // const [touched, setTouched] = useState({});
    // const { values, isLoading, error } = state;

    // const onBlur = ({ target }) => setTouched((prev) => ({
    //     ...prev,
    //     [target.name]: true
    // }));

    // const handleChange = ({ target }) => setState((prev) => ({
    //     ...prev,
    //     values: {
    //         ...prev.values,
    //         [target.name]: target.value
    //     }
    // }));

    // const onSubmit = async () => {
    //     setState((prev) => ({
    //         ...prev,
    //         isLoading: true
    //     }));

    //     try {
    //         await sendContactForm(values);
    //         setTouched({});
    //         setState(initState);
    //         toast({
    //             title: "Message sent.",
    //             status: "success",
    //             duration: 2000,
    //             position: "top",
    //         });
    //     } catch (error) {
    //         setState((prev) => ({
    //             ...prev,
    //             isLoading: false,
    //             error: error.message,
    //         }));
    //     }
    // };

    return (
        // <Container maxW="450px" mt={10}>
        //     <Heading
        //         fontFamily="Atrament"
        //         fontSize="27px"
        //         marginBottom="7.5px"
        //         marginTop="0px"
        //     >
        //         Contact</Heading>
        //     {error && (
        //         <Text color="red.300" my={4} fontSize="l">
        //             {error}
        //         </Text>
        //     )}

        //     <FormControl isRequired isInvalid={touched.name && !values.name} mb={10}>
        //         <FormLabel
        //             fontFamily="Atrament"
        //             fontSize="20px"
        //         >
        //             Name</FormLabel>
        //         <Input
        //             type="text"
        //             name="name"
        //             errorBorderColor="red.300"
        //             value={values.name}
        //             onChange={handleChange}
        //             onBlur={onBlur}
        //             borderRadius="5px"
        //             backgroundColor="#AFD3ED"
        //             width="300px"
        //             height="27.5px"
        //             fontSize="16px"
        //         />
        //         <FormErrorMessage
        //             fontSize="12px"
        //         ><i>Required</i></FormErrorMessage>
        //     </FormControl>

        //     <FormControl isRequired isInvalid={touched.email && !values.email} mb={10}>
        //         <FormLabel
        //             fontFamily="Atrament"
        //             fontSize="20px"
        //         >Email</FormLabel>
        //         <Input
        //             type="email"
        //             name="email"
        //             errorBorderColor="red.300"
        //             value={values.email}
        //             onChange={handleChange}
        //             onBlur={onBlur}
        //             borderRadius="5px"
        //             backgroundColor="#AFD3ED"
        //             width="300px"
        //             height="27.5px"
        //             fontSize="16px"
        //         />
        //         <FormErrorMessage
        //             fontSize="12px"
        //         ><i>Required</i></FormErrorMessage>
        //     </FormControl>

        //     <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={10}>
        //         <FormLabel
        //             fontFamily="Atrament"
        //             fontSize="20px"
        //         >Subject</FormLabel>
        //         <Input
        //             type="text"
        //             name="subject"
        //             errorBorderColor="red.300"
        //             value={values.subject}
        //             onChange={handleChange}
        //             onBlur={onBlur}
        //             borderRadius="5px"
        //             backgroundColor="#AFD3ED"
        //             width="300px"
        //             height="27.5px"
        //             fontSize="16px"
        //         />
        //         <FormErrorMessage
        //             fontSize="12px"
        //         ><i>Required</i></FormErrorMessage>
        //     </FormControl>

        //     <FormControl isRequired isInvalid={touched.message && !values.message} mb={10}>
        //         <FormLabel
        //             fontFamily="Atrament"
        //             fontSize="20px"
        //         >Message</FormLabel>
        //         <Textarea
        //             type="text"
        //             name="message"
        //             rows={4}
        //             errorBorderColor="red.300"
        //             value={values.message}
        //             onChange={handleChange}
        //             onBlur={onBlur}
        //             borderRadius="5px"
        //             backgroundColor="#AFD3ED"
        //             width="300px"
        //             height="35px"
        //             fontSize="16px"
        //         />
        //         <FormErrorMessage
        //             fontSize="12px"
        //         ><i>Required</i></FormErrorMessage>
        //     </FormControl>
        //     <Button
        //         variant="outline"
        //         colorScheme="blue"
        //         isLoading={isLoading}
        //         disabled={!values.name || !values.email || !values.subject || !values.message}
        //         onClick={onSubmit}
        //         fontFamily="Atrament"
        //         fontSize="23px"
        //         borderRadius="5px"
        //         // backgroundColor="#F970D5"
        //         backgroundColor="#40E00B"
        //         border="none"
        //         cursor="pointer"
        //         width="100px"
        //         display="flex"
        //     >Submit</Button>
        // </Container>
       
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                            Contact
                        </h1>
                        {/* <p className="text-gray-400 dark:text-gray-400">
                            Fill up the form below to send us a message.
                        </p> */}
                    </div>
                    <div className="m-7">
                        <form action="https://api.web3forms.com/submit" method="POST" id="form">
                            <input type="hidden" name="apikey" value="54ffb01b-a6c6-4269-9cb7-11f5d33a3d15" />
                            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <input type="checkbox" name="botcheck" id="" style={{display: "none"}} />
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Jason Abeln" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="jason@voorbeeld.nl" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                <input type="text" name="phone" id="phone" placeholder="+31 (020) 1234-567" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                            </div>
                            <div className="mb-6">
                                <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                                    Verzenden
                                </button>
                            </div>
                            <p className="text-base text-center text-gray-400" id="result"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
