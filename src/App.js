import {
  Container,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "./components/Header";
import axios from "axios"
import { ServerURL } from "./config/constances";
import { useEffect } from "react";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    axios.get(`${ServerURL}/api`).then(res => {
      console.log(res.data)
    })
  }, [])
 
  const uploadHandler = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`${ServerURL}/api/file`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then(res => {
        console.log(res.data)
      })
  }

  const requestAirdropHandler = () => {
    axios.get(`${ServerURL}/api/airdrop`)
      .then(res => {
        console.log(res.data);
      })
  }

  return (
    <div>
      <Header />
      <section id='hero' className='bg-gradient w-full'>
        <Container>
          <div className='px-[100px] flex items-center justify-around py-[100px] lg:flex-col sm:px-5'>
            <p
              style={{
                textShadow:
                  "rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -3px -3px 0px",
              }}
              className='text-dark text-[80px] font-bold text-center sm:text-[55px]'
            >
              Airdrop <br /> Project
            </p>
            <input type={"file"} style={{ visibility: "hidden" }} id="fileId"  onChange={e => uploadHandler(e.target.files[0])}/>
            <div className='grid gap-5 lg:pt-12'>
              <Button
                className='!bg-[#141416]  !border-accent !text-accent !normal-case lg:!text-2xl lg:!px-14 lg:!py-2'
                style={{ border: "2px solid" }}
                onClick={() =>
                  { document.getElementById("fileId").click(); }
                }
              >
                Upload Excel
              </Button>
              <Button
                className='!bg-[#141416]  !border-accent !text-accent !normal-case lg:!text-2xl lg:!px-14 lg:!py-2'
                style={{ border: "2px solid" }}
                onClick={requestAirdropHandler}
              >
                Request Airdrop
              </Button>
            </div>
          </div>
        </Container>
      </section>
    
      <section id='the-project'>
        <Container className='flex justify-center py-8'>
          <p className='text-[60px] text-white font-bold text-center mb-12 sm:text-[40px] sm:mb-5'>
            The Project
          </p>
          <Grid container rowSpacing={matches ? 3 : 5} columnSpacing={10}>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-xl font-normal text-white text-left lg:text-center'>
                Our project is based on a phenomenon that was made popular in
                the 80's during the massive Hedge Fund expansion of the time.
              </p>
              <p className='text-xl font-normal text-white text-left lg:text-center'>
                Traders would deploy a leveraged bet on a commodity, then head
                to the Chicago, O'Hare International Airport.
              </p>
              <p className='text-xl font-normal text-white text-left lg:text-center'>
                If the bet won, they were set for decades. If not, they bought a
                one-way ticket to start a new life.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-xl font-normal text-white text-left lg:text-center'>
                Luckily, in the world of cryptocurrency regulations we live in,
                combined with the beauty of mathematics, we are able to mitigate
                the risks of this play while still achieving similar results
                through the use of this investment strategy.
              </p>
              <p className='text-xl font-normal text-white text-left lg:text-center'>
                See whitepages for more.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id='faq'>
        <Container className='flex justify-center py-8'>
          <p className='text-[60px] text-white font-bold text-center mb-12 sm:text-[40px] sm:mb-5'>
            F.A.Q.
          </p>
          <Grid container spacing={10}>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How do wins/loses effect the P/L?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                If a voted upon play pays off, the treasury profits will be used
                in the strategical appreciation of our token immediately. If the
                play does not, we will always keep a base amount in the OIF to
                maintain coin value.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How can I participate?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                Signing our contract will allow you to contribute on the bets
                taken, as well as profit from winning investments.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                How do I know this is a legitimate project?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                Our team is comprised of KYC'd individuals and for guaranteed
                security. While rug pulls do exist in the crypto world, a
                sustainable business model is much more valuable in this
                developing crypto market.
              </p>
            </Grid>
            <Grid item md={6} xs={12} className='grid gap-5'>
              <p className='text-[30px] font-normal text-white text-center'>
                Who is behind this project?
              </p>
              <p className='text-xl font-normal text-white text-center'>
                The OP Team is comprised of group of 3 developers, 2 marketers,
                and our CEO. Our team has already been KYC approved and will
                expand further in the Whitepages for added transparency. Also
                note that all new members will be KYC'd when we expand our team.
              </p>
            </Grid>
          </Grid>
        </Container>
      </section>
    
      <p className='text-xl text-white text-center mt-10 mb-5'>
        Airdrop Project &copy; Copyright {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default App;
