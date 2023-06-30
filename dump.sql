--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: recipes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    name text,
    description text
);


--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.recipes VALUES (1, 'Torta de maça', 'muito boa');
INSERT INTO public.recipes VALUES (2, 'Carne de panela', 'não muito boa');
INSERT INTO public.recipes VALUES (3, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (4, NULL, NULL);
INSERT INTO public.recipes VALUES (5, NULL, NULL);
INSERT INTO public.recipes VALUES (7, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (8, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (10, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (11, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (12, 'Bolo de cenoura', 'feito com carinho');
INSERT INTO public.recipes VALUES (6, NULL, 'feito com carinho');
INSERT INTO public.recipes VALUES (15, 'Casquinha de siri', 'feito com carinhoooooo d+');


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.recipes_id_seq', 15, true);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

