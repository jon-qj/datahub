(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7990],{4137:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4887:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(4137)),l=["components"],o={title:"DataHub Metadata Ingestion",sidebar_label:"Metadata Ingestion",slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},s="DataHub Metadata Ingestion",d={unversionedId:"metadata-ingestion/README",id:"metadata-ingestion/README",isDocsHomePage:!1,title:"DataHub Metadata Ingestion",description:"Python version 3.6+",source:"@site/genDocs/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md",version:"current",frontMatter:{title:"DataHub Metadata Ingestion",sidebar_label:"Metadata Ingestion",slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"Debugging Guide",permalink:"/docs/debugging"},next:{title:"Architecture Overview",permalink:"/docs/architecture/architecture"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install from PyPI",id:"install-from-pypi",children:[]},{value:"Install using Docker",id:"install-using-docker",children:[]},{value:"Install from source",id:"install-from-source",children:[]}]},{value:"Recipes",id:"recipes",children:[]},{value:"Transformations",id:"transformations",children:[]},{value:"Using as a library",id:"using-as-a-library",children:[]},{value:"Lineage with Airflow",id:"lineage-with-airflow",children:[{value:"Using Datahub&#39;s Airflow lineage backend (recommended)",id:"using-datahubs-airflow-lineage-backend-recommended",children:[]},{value:"Emitting lineage via a separate operator",id:"emitting-lineage-via-a-separate-operator",children:[]}]},{value:"Developing",id:"developing",children:[]}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-metadata-ingestion"},"DataHub Metadata Ingestion"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/python-3.6%2B-blue",alt:"Python version 3.6+"})),(0,i.kt)("p",null,"This module hosts an extensible Python-based metadata ingestion system for DataHub.\nThis supports sending data to DataHub using Kafka or through the REST API.\nIt can be used through our CLI tool, with an orchestrator like Airflow, or as a library."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before running any metadata ingestion job, you should make sure that DataHub backend services are all running. If you are trying this out locally, the easiest way to do that is through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker"},"quickstart Docker images"),"."),(0,i.kt)("h3",{id:"install-from-pypi"},"Install from PyPI"),(0,i.kt)("p",null,"The folks over at ",(0,i.kt)("a",{parentName:"p",href:"https://www.acryl.io/"},"Acryl Data")," maintain a PyPI package for DataHub metadata ingestion."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Requires Python 3.6+\npython3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),(0,i.kt)("p",null,"If you run into an error, try checking the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing#Common-setup-issues"},(0,i.kt)("em",{parentName:"a"},"common setup issues")),"."),(0,i.kt)("h4",{id:"installing-plugins"},"Installing Plugins"),(0,i.kt)("p",null,"We use a plugin architecture so that you can install only the dependencies you actually need. Click the plugin name to learn more about the specific source recipe and any FAQs!"),(0,i.kt)("p",null,"Sources:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Plugin Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Install Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Provides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/file"},"file")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"included by default")),(0,i.kt)("td",{parentName:"tr",align:null},"File source and sink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/athena"},"athena")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[athena]'")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Athena source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/bigquery"},"bigquery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[bigquery]'")),(0,i.kt)("td",{parentName:"tr",align:null},"BigQuery source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/bigquery"},"bigquery-usage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[bigquery-usage]'")),(0,i.kt)("td",{parentName:"tr",align:null},"BigQuery usage statistics source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/dbt"},"dbt")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"no additional dependencies")),(0,i.kt)("td",{parentName:"tr",align:null},"dbt source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/druid"},"druid")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[druid]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Druid Source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/feast"},"feast")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[feast]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Feast source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/glue"},"glue")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[glue]'")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS Glue source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/hive"},"hive")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[hive]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Hive source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/kafka"},"kafka")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[kafka]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/kafka-connect"},"kafka-connect")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[kafka-connect]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Kafka connect source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/ldap"},"ldap")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[ldap]'")," (",(0,i.kt)("a",{parentName:"td",href:"https://www.python-ldap.org/en/python-ldap-3.3.0/installing.html#build-prerequisites"},"extra requirements"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"LDAP source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/looker"},"looker")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[looker]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Looker source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/lookml"},"lookml")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[lookml]'")),(0,i.kt)("td",{parentName:"tr",align:null},"LookML source, requires Python 3.7+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mongodb"},"mongodb")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mongodb]'")),(0,i.kt)("td",{parentName:"tr",align:null},"MongoDB source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mssql"},"mssql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mssql]'")),(0,i.kt)("td",{parentName:"tr",align:null},"SQL Server source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mysql"},"mysql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mysql]'")),(0,i.kt)("td",{parentName:"tr",align:null},"MySQL source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/oracle"},"oracle")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[oracle]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Oracle source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/postgres"},"postgres")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[postgres]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Postgres source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/redshift"},"redshift")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[redshift]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Redshift source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sagemaker"},"sagemaker")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sagemaker]'")),(0,i.kt)("td",{parentName:"tr",align:null},"AWS SageMaker source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/snowflake"},"snowflake")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[snowflake]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/snowflake"},"snowflake-usage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[snowflake-usage]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake usage statistics source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"sql-profiles")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sql-profiles]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Data profiles for SQL-based systems")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sqlalchemy"},"sqlalchemy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sqlalchemy]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Generic SQLAlchemy source")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/superset"},"superset")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[superset]'")),(0,i.kt)("td",{parentName:"tr",align:null},"Superset source")))),(0,i.kt)("p",null,"Sinks"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Plugin Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Install Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Provides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/file"},"file")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"included by default")),(0,i.kt)("td",{parentName:"tr",align:null},"File source and sink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/console"},"console")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"included by default")),(0,i.kt)("td",{parentName:"tr",align:null},"Console sink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/datahub"},"datahub-rest")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[datahub-rest]'")),(0,i.kt)("td",{parentName:"tr",align:null},"DataHub sink over REST API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/datahub"},"datahub-kafka")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[datahub-kafka]'")),(0,i.kt)("td",{parentName:"tr",align:null},"DataHub sink over Kafka")))),(0,i.kt)("p",null,"These plugins can be mixed and matched as desired. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[bigquery,datahub-rest]'\n")),(0,i.kt)("p",null,"You can check the active plugins:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"datahub check plugins\n")),(0,i.kt)("h4",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub-rest]'  # install the required plugin\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml\n")),(0,i.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-ingestion"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/linkedin/datahub-ingestion?style=plastic",alt:"Docker Hub"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml/badge.svg",alt:"datahub-ingestion docker"}))),(0,i.kt)("p",null,"If you don't want to install locally, you can alternatively run metadata ingestion within a Docker container.\nWe have prebuilt images available on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-ingestion"},"Docker hub"),". All plugins will be installed and enabled automatically."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Limitation: the datahub_docker.sh convenience script assumes that the recipe and any input/output files are accessible in the current working directory or its subdirectories. Files outside the current working directory will not be found, and you'll need to invoke the Docker image directly.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Assumes the DataHub repo is cloned locally.\n./metadata-ingestion/scripts/datahub_docker.sh ingest -c ./examples/recipes/example_to_datahub_rest.yml\n")),(0,i.kt)("h3",{id:"install-from-source"},"Install from source"),(0,i.kt)("p",null,"If you'd like to install from source, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developer guide"),"."),(0,i.kt)("h2",{id:"recipes"},"Recipes"),(0,i.kt)("p",null,"A recipe is a configuration file that tells our ingestion scripts where to pull data from (source) and where to put it (sink).\nHere's a simple example that pulls metadata from MSSQL and puts it into datahub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# A sample recipe that pulls metadata from MSSQL and puts it into DataHub\n# using the Rest API.\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\ntransformers:\n  - type: "fully-qualified-class-name-of-transformer"\n    config:\n      some_property: "some.value"\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,i.kt)("p",null,"We automatically expand environment variables in the config,\nsimilar to variable substitution in GNU bash or in docker-compose files. For details, see\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"},"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"),"."),(0,i.kt)("p",null,"Running a recipe is quite easy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c ./examples/recipes/mssql_to_datahub.yml\n")),(0,i.kt)("p",null,"A number of recipes are included in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes"},"examples/recipes")," directory. For full info and context on each source and sink, see the pages described in the ",(0,i.kt)("a",{parentName:"p",href:"#installing-plugins"},"table of plugins"),"."),(0,i.kt)("h2",{id:"transformations"},"Transformations"),(0,i.kt)("p",null,"If you'd like to modify data before it reaches the ingestion sinks \u2013 for instance, adding additional owners or tags \u2013 you can use a transformer to write your own module and integrate it with DataHub."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"transformers guide")," for more info!"),(0,i.kt)("h2",{id:"using-as-a-library"},"Using as a library"),(0,i.kt)("p",null,"In some cases, you might want to construct the MetadataChangeEvents yourself but still use this framework to emit that metadata to DataHub. In this case, take a look at the emitter interfaces, which can easily be imported and called from your own code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/rest_emitter.py"},"DataHub emitter via REST")," (same requirements as ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub-rest"),"). Basic usage ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_rest.py"},"example"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/kafka_emitter.py"},"DataHub emitter via Kafka")," (same requirements as ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub-kafka"),"). Basic usage ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/library/lineage_emitter_kafka.py"},"example"),".")),(0,i.kt)("h2",{id:"lineage-with-airflow"},"Lineage with Airflow"),(0,i.kt)("p",null,"There's a couple ways to get lineage information from Airflow into DataHub."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're simply looking to run ingestion on a schedule, take a look at these sample DAGs:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/generic_recipe_sample_dag.py"},(0,i.kt)("inlineCode",{parentName:"a"},"generic_recipe_sample_dag.py"))," - reads a DataHub ingestion recipe file and runs it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/mysql_sample_dag.py"},(0,i.kt)("inlineCode",{parentName:"a"},"mysql_sample_dag.py"))," - runs a MySQL metadata ingestion pipeline using an inlined configuration.")))),(0,i.kt)("h3",{id:"using-datahubs-airflow-lineage-backend-recommended"},"Using Datahub's Airflow lineage backend (recommended)"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Airflow lineage backend is only supported in Airflow 1.10.15+ and 2.0.2+."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You need to install the required dependency in your airflow. See ",(0,i.kt)("a",{parentName:"li",href:"https://registry.astronomer.io/providers/datahub/modules/datahublineagebackend"},"https://registry.astronomer.io/providers/datahub/modules/datahublineagebackend"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  pip install acryl-datahub[airflow]\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You must configure an Airflow hook for Datahub. We support both a Datahub REST hook and a Kafka-based hook, but you only need one."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# For REST-based:\nairflow connections add  --conn-type 'datahub_rest' 'datahub_rest_default' --conn-host 'http://localhost:8080'\n# For Kafka-based (standard Kafka sink config can be passed via extras):\nairflow connections add  --conn-type 'datahub_kafka' 'datahub_kafka_default' --conn-host 'broker:9092' --conn-extra '{}'\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"airflow.cfg")," file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},'[lineage]\nbackend = datahub_provider.lineage.datahub.DatahubLineageBackend\ndatahub_kwargs = {\n    "datahub_conn_id": "datahub_rest_default",\n    "capture_ownership_info": true,\n    "capture_tags_info": true,\n    "graceful_exceptions": true }\n# The above indentation is important!\n')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configuration options:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"datahub_conn_id")," (required): Usually ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub_rest_default")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub_kafka_default"),", depending on what you named the connection in step 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"capture_ownership_info")," (defaults to true): If true, the owners field of the DAG will be capture as a DataHub corpuser."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"capture_tags_info")," (defaults to true): If true, the tags field of the DAG will be captured as DataHub tags."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"graceful_exceptions")," (defaults to true): If set to true, most runtime errors in the lineage backend will be suppressed and will not cause the overall task to fail. Note that configuration issues will still throw exceptions."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"inlets")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"outlets")," for your Airflow operators. For reference, look at the sample DAG in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_demo.py"},(0,i.kt)("inlineCode",{parentName:"a"},"lineage_backend_demo.py")),", or reference ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_backend_taskflow_demo.py"},(0,i.kt)("inlineCode",{parentName:"a"},"lineage_backend_taskflow_demo.py"))," if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/concepts/taskflow.html"},"TaskFlow API"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[optional]"," Learn more about ",(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/lineage.html"},"Airflow lineage"),", including shorthand notation and some automation."))),(0,i.kt)("h3",{id:"emitting-lineage-via-a-separate-operator"},"Emitting lineage via a separate operator"),(0,i.kt)("p",null,"Take a look at this sample DAG:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub_provider/example_dags/lineage_emission_dag.py"},(0,i.kt)("inlineCode",{parentName:"a"},"lineage_emission_dag.py"))," - emits lineage using the DatahubEmitterOperator.")),(0,i.kt)("p",null,"In order to use this example, you must first configure the Datahub hook. Like in ingestion, we support a Datahub REST hook and a Kafka-based hook. See step 1 above for details."),(0,i.kt)("h2",{id:"developing"},"Developing"),(0,i.kt)("p",null,"See the guides on ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"using transformers"),"."))}m.isMDXComponent=!0}}]);