import * as React from 'react';
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { KeyboardArrowLeftOutlined } from '@mui/icons-material';
import CustomCard from '@Components/Shared/CustomCard';

export const BoxDivider2 = (props) => {
    return <Box sx={styles.divider} />;
};

export default function UserWithdrawLayout(props) {
    const isDesktop = useMediaQuery('(min-width:900px)');
    const { layout = 1, title = 'Withdraw', children } = props;
    const router = useRouter();

    const getContent = () => {
        return < Box
            sx={{
                position: { xs: 'absolute', sm: 'relative' },
                height: {
                    xs: 1, sm: "auto"
                },
                width: {
                    xs: 1, sm: "auto"
                },
                backgroundColor: '#e2e2e2',
            }
            }
        >
            {!isDesktop &&
                <Box sx={styles.header}>
                    {/* <IconButton onClick={() => router.back()} sx={{ p: 0 }}>
                    <KeyboardArrowLeftOutlined />
                </IconButton> */}
                    <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                        {title}
                    </Typography>
                    {/* <Box /> */}
                </Box>
            }
            <Box sx={styles.container} name="container">
                {children}

                <Typography
                    sx={{
                        fontSize: 12,
                        color: 'grey',
                        // mt: 3,

                        textAlign: 'center',
                        pt: layout === 1 ? 3 : 2,
                        pb: layout === 1 ? 19 : 0,
                    }}
                >
                    All transactions are secured and processed <br /> in
                    Australian Dollars (AUD)
                </Typography>

            </Box>
        </Box >
    }
    return (
        <React.Fragment>
            {
                isDesktop ?
                    <CustomCard
                        bgcolor="primary.main"
                        textcolor="black.main"
                        title={title}
                        isTable={false}
                        content={
                            getContent()
                        }
                    />
                    :
                    getContent()
            }
        </React.Fragment>
    );
}

const styles = {
    header: {
        width: '100%',
        backgroundColor: '#fcdc38',
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,
        px: 2,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 4,
        width: 1,
        px: 0,
        background: 'white',
    },
    divider: {
        width: '100%',
        height: 20,
        // px: 2,
        mt: 2,
        backgroundColor: '#f2f2f2',
    },
};
