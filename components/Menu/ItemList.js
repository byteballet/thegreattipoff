// Moved to brands folder

// import React from 'react';
// import { useEffect, useState, useContext } from 'react';
// import { getSession } from 'next-auth/client';
// import {
//     Table,
//     Typography,
//     Box,
//     TableBody,
//     TableContainer,
//     Button,
//     Container,
// } from '@mui/material';
// import { useRouter } from 'next/router';
// import { UserContext } from '@Context/User/UserProvider';
// import {
//     MENU_DRAWER,
//     MENU_DRAWER_ADMIN,
//     MENU_DRAWER_WITHOUT_USER,
// } from '@lib/constants';
// import { fetchVerifyID } from '@lib/fetcher';

// import IDVerificationPanel from '@Components/MyAccount/Verifications/IDVerificationPanel';
// import Item from './Item';

// const ItemList = ({ handleClose, handleOpenLoginModal }) => {
//     const { user } = useContext(UserContext);
//     const router = useRouter();
//     const [sectionList, setSectionList] = useState(
//         user?.userID ? MENU_DRAWER : MENU_DRAWER_WITHOUT_USER
//     );

//     useEffect(() => {
//         if (user?.roles === 'Admin') {
//             setSectionList(MENU_DRAWER_ADMIN);
//         } else if (user?.roles === 'User') {
//             setSectionList(MENU_DRAWER);
//         } else {
//             setSectionList(MENU_DRAWER_WITHOUT_USER);
//         }
//     }, [user]);

//     const handelOnClick = (href) => {
//         router.push({
//             pathname: href,
//         });
//         handleClose();
//     };

//     const _fetchIsVerified = async (clientid) => {
//         setLoading(true);
//         const userSession = await getSession();
//         const _res0 = await fetchVerifyID({
//             clientid: clientid,
//             status: 'check',
//         });
//         console.log('VerificationForm::_fetchIsVerified result=', _res0);
//         if (_res0.error) {
//             console.log('VerificationForm::_fetchIsVerified result=error');
//         } else {
//             let _res = _res0.data;
//             // setState({
//             //   ...state,
//             //   status:_res.status,
//             //   greenIDToken:_res.greenIDToken
//             // })
//             console.log('SEBCHECK VERIFIED result=', _res.verified);
//             addUser({
//                 ...userSession.user,
//                 verified: _res.verified,
//                 greenIDToken: 0,
//             });
//             setVerified({
//                 verifiedStatus: _res.verified,
//                 verifyStatuscode: _res.ERROBJ.ERRORCODE,
//                 verifyStatusdesc: _res.ERROBJ.ERRORDESC,
//             });
//         }
//         setLoading(false);
//     };

//     const renderAuthSection = () => {
//         return (
//             <div
//                 style={{
//                     background: '#FFDE16',
//                     paddingTop: 12,
//                     paddingBottom: 10,
//                     paddingRight: 17,
//                     paddingLeft: 17,
//                 }}
//             >
//                 <Typography
//                     component="p"
//                     fontWeight="fontWeightBold"
//                     align="center"
//                     fontSize={14.5}
//                     fontFamily={'system-ui'}
//                 >
//                     Welcome to EliteBet
//                 </Typography>
//                 <Typography
//                     variant="p"
//                     component="p"
//                     align="center"
//                     fontSize={10.5}
//                     fontFamily={'system-ui'}
//                 >
//                     Join in under a minute!
//                 </Typography>
//                 <Button
//                     color="success"
//                     variant="contained"
//                     fullWidth
//                     size="small"
//                     sx={{
//                         mt: 1,
//                         mb: 2,
//                         fontSize: 13.5,
//                         fontWeight: 'bold',
//                         py: 0,
//                         height: 28,
//                     }}
//                     onClick={() => handelOnClick('register')}
//                 >
//                     Join Now
//                 </Button>
//                 <Typography
//                     variant="p"
//                     component="p"
//                     align="center"
//                     fontSize={9}
//                     fontFamily={'system-ui'}
//                 >
//                     Already have account?
//                 </Typography>
//                 <Button
//                     variant="outlined"
//                     fullWidth
//                     size="small"
//                     sx={{
//                         mt: 0.5,
//                         mb: 1,
//                         fontSize: 13.5,
//                         fontWeight: 'bold',
//                         py: 0,
//                         height: 28,
//                         color: '#000000',
//                         border: '1.7px solid #000000',
//                     }}
//                     onClick={() => {
//                         handleClose();
//                         handleOpenLoginModal(true);
//                     }}
//                 >
//                     Log In
//                 </Button>
//             </div>
//         );
//     };

//     const renderMenu = (section) => {
//         let list =
//             section.limited &&
//             process.env.client.restrictedModules.indexOf('hotbet') > -1
//                 ? section.limited
//                 : section.list;
//         return (
//             <React.Fragment>
//                 <div
//                     style={{
//                         background: '#F0F1F3',
//                         paddingTop: 15,
//                         paddingBottom: 15,
//                         paddingRight: 20,
//                         paddingLeft: 20,
//                     }}
//                 >
//                     <Typography
//                         variant="h2"
//                         component="p"
//                         fontWeight="fontWeightBold"
//                         sx={{ fontSize: 16 }}
//                     >
//                         {section?.name}
//                     </Typography>
//                 </div>
//                 <Table
//                     aria-label="caption table"
//                     size="small"
//                     className="racingTable"
//                 >
//                     <TableBody
//                         sx={{
//                             background: '#ffffff',
//                             paddingRight: 20,
//                         }}
//                     >
//                         {list &&
//                             list.length > 0 &&
//                             list.map((item, idx) => (
//                                 <Item
//                                     data={item}
//                                     handleClose={handleClose}
//                                     key={idx}
//                                 />
//                             ))}
//                     </TableBody>
//                 </Table>
//             </React.Fragment>
//         );
//     };

//     return (
//         <Box>
//             <TableContainer>
//                 {!user?.userID && renderAuthSection()}
//                 {sectionList.length > 0 &&
//                     sectionList.map((section, idx) => {
//                         return (
//                             <React.Fragment key={idx}>
//                                 {renderMenu(section)}
//                             </React.Fragment>
//                         );
//                     })}
//             </TableContainer>
//         </Box>
//     );
// };

// export default ItemList;
