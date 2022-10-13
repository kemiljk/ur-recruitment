import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  const customer = "customer";
  return (
    <div className="px-4 w-full flex flex-col justify-center items-center h-full">
      <Head>
        <title>User Research Recruitment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl">
        <div className="mt-12 mb-12">
          <div className="flex dark:hidden w-full items-center justify-center">
            <Image
              src="https://imgix.cosmicjs.com/ea85dc30-4ae9-11ed-937d-b90c3fbb5a80-Aqua3x.png"
              width={400}
              height={95}
              alt={"Moneybox logo"}
            />
          </div>
          <div className="hidden dark:flex w-full items-center justify-center">
            <Image
              src="https://imgix.cosmicjs.com/ea89d3d0-4ae9-11ed-937d-b90c3fbb5a80-White3x.png"
              width={400}
              height={95}
              alt={"Moneybox logo"}
            />
          </div>
        </div>
        <p>Dear {customer},</p>
        <p>
          Thank you very much for expressing interest in being part of our
          customer research group. 🙏
        </p>
        <p>
          Our team is always working on new updates and features for the app, so
          we&apos;re looking for customers who are willing to share their
          opinions on them - and other financial services concepts and topics -
          via online discussions. But we don&apos;t expect you to contribute
          your time and insight for free; there&apos;ll be a monetary reward for
          taking part. 💸 The exact amount will depend on the length of the
          discussion (for example, we currently offer £20 for a 30 minute
          discussion and £40 for an hour discussion) and we&apos;ll let you know
          what the reward is in advance.
        </p>
        <p>
          There will be different types of research we run. It might be that we
          ask you to have a 30 minute video call with us to talk about a topic
          or be part of a group discussion to review a prototype. Of course, you
          will not be obliged to take part in any research you don&apos;t feel
          comfortable with or have no time for. We will reach out in advance to
          provide some context and book a time that is convenient to you.
        </p>
        <p>
          By clicking the button below you agree for us to hold your personal
          information in a secure database and for us to reach out to you for
          upcoming customer research opportunities. You will be able to opt out
          of this list at any point. We will not reach out to you more than once
          in two months (but typically it will be less often than that).
        </p>
        <p>
          We will initially reach out to you to ask you some additional
          demographic and Moneybox related questions about you and your
          household (age, income, experience with moneybox, financial goals
          etc). This will be part of inputting your data in the database and
          won&apos;t be incentivised.
        </p>
        <p>
          If the research you take part in involves an online discussion
          we&apos;ll run the sessions using Google Meet, which means you&apos;ll
          need the following to take part and receive your monetary reward:
          <ul className="list-disc ml-6 mt-4">
            <li>A stable internet connection 📳</li>
            <li>
              A computer, laptop or mobile phone with a functioning microphone
              🎤
            </li>
            <li>A quiet and private location</li>
          </ul>
        </p>
        <p>
          If you&apos;d like to be involved, please click the link below. If you
          have any further questions please{" "}
          <a href="mailto:spyridoula.oikonomou@moneyboxapp.com?subject=User%20Research%20Recruitment">
            email Spyri
          </a>
          .
        </p>
        <div className="w-full items-center justify-center flex mt-4">
          <Button bgColor={"bg-primary"} textColor={"text-white"} href={"#"}>
            Register interest
          </Button>
        </div>
        <p>
          For more information on how Moneybox handles your data see our{" "}
          <a href="https://www.moneyboxapp.com/privacy/">Privacy Policy</a>
        </p>
        <p>Thanks!</p>
        <p>Team Moneybox</p>
        <p>xxx</p>
      </main>

      {/* <footer className="mt-20">
        <p>Legal stuff</p>
      </footer> */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      customer: "customer",
    },
  };
}
