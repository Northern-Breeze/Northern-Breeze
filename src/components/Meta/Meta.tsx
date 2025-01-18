import React from "react";
import Head from "next/head";

interface Props {
  keywords: string;
  title: string;
  description: string;
}

export default function Meta(props: Props) {
  const { keywords, title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/images/logo.png' />
      <meta property='og:title' content='Northen Breeze' key='title' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name="author" content="Northern Breeze" />
      <meta name='name' content='Northern Breeze Software Development' />
      <meta name='keywords' content={keywords} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Northen Breeze - A Software Development Campany for All Sizes",
  keywords:
    "Software Development, App Development, Cross Mobile Development, Flutter Development, React Development, Angular Developnent",
  description:
    "At Northern We Offer Software Solution and Innovation for Small and Medium Business That Scales",
};