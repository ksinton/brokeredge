--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Homebrew)
-- Dumped by pg_dump version 17.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: business; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.business (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(40),
    industry_id smallint,
    sub_industry_id smallint,
    business_model_id smallint,
    start_date_year smallint,
    start_date_month smallint,
    desired_price_id smallint,
    seller_financing_id_id smallint,
    seller_financing_interest_rate smallint,
    sellers_description text,
    logo_image_url character varying(255),
    website_url character varying(255),
    website_url_2 character varying(255),
    linkedin_profile character varying(255),
    facebook_page character varying(255),
    instagram_profile character varying(255),
    x_profile character varying(255),
    tiktok_profile character varying(255),
    business_logo character varying(255),
    other_social_media character varying(255),
    status_id smallint,
    listing_type_id smallint,
    user_id integer NOT NULL,
    created_timestamp bigint NOT NULL,
    last_updated_timestamp bigint NOT NULL
);


ALTER TABLE public.business OWNER TO kimsinton;

--
-- Name: business_asset_type; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.business_asset_type (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.business_asset_type OWNER TO kimsinton;

--
-- Name: business_asset_type_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.business_asset_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.business_asset_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: business_assets; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.business_assets (
    id bigint NOT NULL,
    asset_type_id smallint NOT NULL,
    url character varying(255) NOT NULL,
    description character varying(255),
    business_id integer NOT NULL,
    notes text,
    created_timestamp bigint,
    last_updated_timestamp bigint
);


ALTER TABLE public.business_assets OWNER TO kimsinton;

--
-- Name: business_assets_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.business_assets ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.business_assets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: business_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.business ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.business_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: business_model; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.business_model (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.business_model OWNER TO kimsinton;

--
-- Name: business_model_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.business_model ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.business_model_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: business_user; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.business_user (
    id integer NOT NULL,
    user_type_id smallint NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_timestamp bigint NOT NULL,
    last_updated_timestamp bigint NOT NULL
);


ALTER TABLE public.business_user OWNER TO kimsinton;

--
-- Name: industry; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.industry (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.industry OWNER TO kimsinton;

--
-- Name: industry_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.industry ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.industry_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: reason_for_selling; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.reason_for_selling (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.reason_for_selling OWNER TO kimsinton;

--
-- Name: reason_for_selling_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.reason_for_selling ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reason_for_selling_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: seller_financing; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.seller_financing (
    id smallint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.seller_financing OWNER TO kimsinton;

--
-- Name: seller_financing_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.seller_financing ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.seller_financing_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: sub_industry; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.sub_industry (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.sub_industry OWNER TO kimsinton;

--
-- Name: sub_industry_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.sub_industry ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sub_industry_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.business_user ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_type; Type: TABLE; Schema: public; Owner: kimsinton
--

CREATE TABLE public.user_type (
    id smallint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.user_type OWNER TO kimsinton;

--
-- Name: user_type_id_seq; Type: SEQUENCE; Schema: public; Owner: kimsinton
--

ALTER TABLE public.user_type ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: business; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.business (id, name, phone, industry_id, sub_industry_id, business_model_id, start_date_year, start_date_month, desired_price_id, seller_financing_id_id, seller_financing_interest_rate, sellers_description, logo_image_url, website_url, website_url_2, linkedin_profile, facebook_page, instagram_profile, x_profile, tiktok_profile, business_logo, other_social_media, status_id, listing_type_id, user_id, created_timestamp, last_updated_timestamp) FROM stdin;
15	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	20	0	0
16	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	21	1739508987	1739508987
17	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	25	1739567648	1739567648
18	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	26	1739568282	1739568282
19	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	27	1739590314	1739590314
20	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	28	1739592236	1739592236
21	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	29	1739594366	1739594366
22	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	30	1739594430	1739594430
23	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	31	1739594509	1739594509
24	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	32	1739594576	1739594576
25	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	33	1739594626	1739594626
26	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	34	1739594651	1739594651
27	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	35	1739594801	1739594801
28	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	36	1739594909	1739594909
29	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	37	1739594935	1739594935
30	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	38	1739594948	1739594948
31	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	39	1739594949	1739594949
32	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	40	1739595015	1739595015
33	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	41	1739596860	1739596860
34	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	42	1739596872	1739596872
35	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	43	1739597473	1739597473
36	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	44	1739729287	1739729287
37	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	45	1739729670	1739729670
38	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	46	1739734443	1739734443
39	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	47	1739735779	1739735779
40	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	48	1739735802	1739735802
41	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	49	1739736452	1739736452
42	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	50	1739739581	1739739581
43	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	51	1739892885	1739892885
44	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	52	1739893139	1739893139
45	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	53	1739893153	1739893153
46	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	54	1739893168	1739893168
47	Test name	343-442-4242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	55	1739896479	1739896479
48	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	56	1739897929	1739897929
49	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	57	1739900197	1739900197
50	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	58	1739910181	1739910181
51	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	59	1739910194	1739910194
52	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	60	1739910459	1739910459
53	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	61	1739910469	1739910469
54	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	62	1739910472	1739910472
55	name xyz	641 222 2222	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	63	1739914368	1739914368
56	Mr Smartass Biz	4088248888	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	64	1739914841	1739914841
57	fsfsfsfwer	3535353	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	65	1739917984	1739917984
58	fsfsfsfwer	3535353	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	66	1739919670	1739919670
59	wrwwrwcwr	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	67	1739919966	1739919966
60	wrwwrwcwr	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	68	1739920011	1739920011
61	sfdsf ssfsfsd	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	69	1739920209	1739920209
62	Mr Wealthy Inc	408824555	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	70	1739931001	1739931001
63	Mr Wealthy Inc	408824555	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	71	1740002115	1740002115
64	Mr Wealthy Inc	408824555	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	72	1740024561	1740024561
65	Mr Wealthy Incrr	40882455577	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	73	1740100338	1740100338
66	Mr Wealthy Incrr	40882455577	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	74	1740101144	1740101144
67	sfssd	sdssdsdds	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	75	1740109441	1740109441
68	jkhghjhgdth	7665767	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	76	1740157515	1740157515
69	skjsjkfs?!@+	42424+ (5343)	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	77	1740238561	1740238561
70	wrwwrwrwr	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	78	1740238646	1740238646
71	wrwwrwrwr	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	79	1740253512	1740253512
72	wrwwrwrwr	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	80	1740253522	1740253522
73	dgddgdfgd_	2422424	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	81	1740271244	1740271244
74	dgddgdfgd&quot;_&#39;	2422424	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	83	1740271779	1740271779
75	dgddgdfgd&quot;_&#39;	+27 (242) - 4247	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	84	1740272120	1740272120
76	1eqqeqeqeqe	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	85	1740279351	1740279351
77	1eqqeqeqeqe	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	86	1740279426	1740279426
78	1eqqeqeqeqe	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	87	1740279846	1740279846
79	1eqqeqeqeqe	4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	88	1740281297	1740281297
80		4088248917	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	89	1740281321	1740281321
\.


--
-- Data for Name: business_asset_type; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.business_asset_type (id, name) FROM stdin;
\.


--
-- Data for Name: business_assets; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.business_assets (id, asset_type_id, url, description, business_id, notes, created_timestamp, last_updated_timestamp) FROM stdin;
\.


--
-- Data for Name: business_model; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.business_model (id, name) FROM stdin;
\.


--
-- Data for Name: business_user; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.business_user (id, user_type_id, email, password, created_timestamp, last_updated_timestamp) FROM stdin;
1	0	test@temail.com	343-442-4242	0	0
2	0	test@temail.com	343-442-4242	0	0
3	0	test@temail.com	343-442-4242	0	0
4	0	test@temail.com	343-442-4242	0	0
5	0	test@temail.com	343-442-4242	0	0
6	0	test@temail.com	343-442-4242	0	0
7	0	test@temail.com	343-442-4242	0	0
8	0	test@temail.com	343-442-4242	0	0
9	0	test@temail.com	343-442-4242	0	0
10	0	test@temail.com	343-442-4242	0	0
11	0	test@temail.com	343-442-4242	0	0
12	0	test@temail.com	343-442-4242	0	0
13	0	test@temail.com	343-442-4242	0	0
14	0	test@temail.com	343-442-4242	0	0
15	0	test@temail.com	343-442-4242	0	0
16	0	test@temail.com	343-442-4242	0	0
17	0	test@temail.com	343-442-4242	0	0
18	0	test@temail.com	343-442-4242	0	0
19	0	test@temail.com	343-442-4242	0	0
20	0	test@temail.com	343-442-4242	0	0
21	0	test@temail.com	343-442-4242	1739508987	1739508987
22	0	test@temail.com	343-442-4242	1739552779	1739552779
23	0	test@temail.com	343-442-4242	1739553006	1739553006
24	0	test@temail.com	343-442-4242	1739553048	1739553048
25	0	test@temail.com	343-442-4242	1739567648	1739567648
26	0	test@temail.com	343-442-4242	1739568282	1739568282
27	0	test@temail.com	343-442-4242	1739590314	1739590314
28	0	test@temail.com	343-442-4242	1739592236	1739592236
29	0	test@temail.com	343-442-4242	1739594366	1739594366
30	0	test@temail.com	343-442-4242	1739594430	1739594430
31	0	test@temail.com	343-442-4242	1739594509	1739594509
32	0	test@temail.com	343-442-4242	1739594576	1739594576
33	0	test@temail.com	343-442-4242	1739594626	1739594626
34	0	test@temail.com	343-442-4242	1739594651	1739594651
35	0	test@temail.com	343-442-4242	1739594801	1739594801
36	0	test@temail.com	343-442-4242	1739594909	1739594909
37	0	test@temail.com	343-442-4242	1739594935	1739594935
38	0	test@temail.com	343-442-4242	1739594948	1739594948
39	0	test@temail.com	343-442-4242	1739594949	1739594949
40	0	test@temail.com	343-442-4242	1739595015	1739595015
41	0	test@temail.com	343-442-4242	1739596860	1739596860
42	0	test@temail.com	343-442-4242	1739596872	1739596872
43	0	test@temail.com	343-442-4242	1739597473	1739597473
44	0	test@temail.com	343-442-4242	1739729287	1739729287
45	0	test@temail.com	343-442-4242	1739729670	1739729670
46	0	test@temail.com	343-442-4242	1739734443	1739734443
47	0	test@temail.com	343-442-4242	1739735779	1739735779
48	0	test@temail.com	343-442-4242	1739735802	1739735802
49	0	test@temail.com	343-442-4242	1739736452	1739736452
50	0	testing@fromreact.com	dragon55	1739739581	1739739581
51	0	testing@fromreact.com	dragon55	1739892885	1739892885
52	0	testing@fromreact.com	dragon55	1739893139	1739893139
53	0	testing@fromreact.com	dragon55	1739893153	1739893153
54	0	testing@fromreact.com	dragon55	1739893168	1739893168
55	0	testing@fromreact.com	dragon55	1739896479	1739896479
56	0	testing@fromreact.com	dragon55	1739897929	1739897929
57	0	testing@fromreact.com	dragon55	1739900197	1739900197
58	0	testing@fromreact.com	dragon55	1739910181	1739910181
59	0	testing@fromreact.com	dragon55	1739910194	1739910194
60	0	testing@fromreact.com	dragon55	1739910459	1739910459
61	0	testing@fromreact.com	dragon55	1739910469	1739910469
62	0	testing@fromreact.com	dragon55	1739910472	1739910472
63	0	testing@fromreact.com	dragon55	1739914368	1739914368
64	0	smartass@gmail.com	dragon55	1739914841	1739914841
65	0	kimSinton@gmail.com	dragon55	1739917984	1739917984
66	0	kimSinton@gmail.com	dragon55	1739919670	1739919670
67	0	kimSinton@gmail.com	dragon55	1739919966	1739919966
68	0	kimSinton@gmail.com	dragon55	1739920011	1739920011
69	0	kimSinton@gmail.com	dragon55	1739920209	1739920209
70	0	wealhtyguy@gmail.com	muskratrat	1739931001	1739931001
71	0	wealhtyguy@gmail.com	macmacmacmac	1740002115	1740002115
72	0	wealhtyguy@gmail.com	macmacmac123	1740024561	1740024561
73	0	wealhtyguy88@gmail.com	corscorscors	1740100338	1740100338
74	0	wealhtyguy88@gmail.com	corscorscorscors	1740101144	1740101144
75	0		frogfrogfrogfrog	1740109441	1740109441
76	0	kimSinton@gmail.com	froogyfroogyfroogy	1740157515	1740157515
77	0	kimSinton@gmail.com	freedomfreedom	1740238561	1740238561
78	0	kimSinton@gmail.com	freedomfreedom	1740238646	1740238646
79	0	kimSinton@gmail.com	freedomfreedom	1740253512	1740253512
80	0	kimSinton@gmail.com	freedomfreedom	1740253522	1740253522
81	0	kimSinton@gmail.com	hothothothot	1740271244	1740271244
82	0	kimSinton@gmail.com	hothothothot	1740271332	1740271332
83	0	kimSinton@gmail.com	hothothothot	1740271779	1740271779
84	0	kimSinton@gmail.com	hothothothot	1740272120	1740272120
85	0	kimSinton@gmail.com	cooldudecool	1740279351	1740279351
86	0	kimSinton@gmail.com	cooldudecool	1740279426	1740279426
87	0	kimSinton@gmail.com	cooldudecool	1740279846	1740279846
88	0	kimSinton@gmail.com	cooldudecool	1740281297	1740281297
89	0	kimSinton@gmail.com	cooldudecool	1740281321	1740281321
\.


--
-- Data for Name: industry; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.industry (id, name) FROM stdin;
\.


--
-- Data for Name: reason_for_selling; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.reason_for_selling (id, name) FROM stdin;
\.


--
-- Data for Name: seller_financing; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.seller_financing (id, name) FROM stdin;
\.


--
-- Data for Name: sub_industry; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.sub_industry (id, name) FROM stdin;
\.


--
-- Data for Name: user_type; Type: TABLE DATA; Schema: public; Owner: kimsinton
--

COPY public.user_type (id, name) FROM stdin;
\.


--
-- Name: business_asset_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.business_asset_type_id_seq', 1, false);


--
-- Name: business_assets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.business_assets_id_seq', 1, false);


--
-- Name: business_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.business_id_seq', 80, true);


--
-- Name: business_model_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.business_model_id_seq', 1, false);


--
-- Name: industry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.industry_id_seq', 1, false);


--
-- Name: reason_for_selling_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.reason_for_selling_id_seq', 1, false);


--
-- Name: seller_financing_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.seller_financing_id_seq', 1, false);


--
-- Name: sub_industry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.sub_industry_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.user_id_seq', 89, true);


--
-- Name: user_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimsinton
--

SELECT pg_catalog.setval('public.user_type_id_seq', 1, false);


--
-- Name: business_asset_type business_asset_type_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business_asset_type
    ADD CONSTRAINT business_asset_type_pkey PRIMARY KEY (id);


--
-- Name: business_assets business_assets_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business_assets
    ADD CONSTRAINT business_assets_pkey PRIMARY KEY (id);


--
-- Name: business_model business_model_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business_model
    ADD CONSTRAINT business_model_pkey PRIMARY KEY (id);


--
-- Name: business business_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business
    ADD CONSTRAINT business_pkey PRIMARY KEY (id);


--
-- Name: industry industry_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.industry
    ADD CONSTRAINT industry_pkey PRIMARY KEY (id);


--
-- Name: reason_for_selling reason_for_selling_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.reason_for_selling
    ADD CONSTRAINT reason_for_selling_pkey PRIMARY KEY (id);


--
-- Name: seller_financing seller_financing_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.seller_financing
    ADD CONSTRAINT seller_financing_pkey PRIMARY KEY (id);


--
-- Name: sub_industry sub_industry_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.sub_industry
    ADD CONSTRAINT sub_industry_pkey PRIMARY KEY (id);


--
-- Name: business_user user_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business_user
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: user_type user_type_pkey; Type: CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.user_type
    ADD CONSTRAINT user_type_pkey PRIMARY KEY (id);


--
-- Name: business_assets fk_business_asset_id_business_id; Type: FK CONSTRAINT; Schema: public; Owner: kimsinton
--

ALTER TABLE ONLY public.business_assets
    ADD CONSTRAINT fk_business_asset_id_business_id FOREIGN KEY (business_id) REFERENCES public.business(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

