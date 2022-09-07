<!DOCTYPE html>
<html class="writer-html5" lang="en" >
<head>
  <meta charset="utf-8" /><meta name="generator" content="Docutils 0.17.1: http://docutils.sourceforge.net/" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stokes equations with Taylor-Hood elements &mdash; DOLFINx 0.5.1 documentation</title>
      <link rel="stylesheet" href="../_static/pygments.css" type="text/css" />
      <link rel="stylesheet" href="../_static/css/theme.css" type="text/css" />
  <!--[if lt IE 9]>
    <script src="../_static/js/html5shiv.min.js"></script>
  <![endif]-->
  
        <script data-url_root="../" id="documentation_options" src="../_static/documentation_options.js"></script>
        <script src="../_static/jquery.js"></script>
        <script src="../_static/underscore.js"></script>
        <script src="../_static/_sphinx_javascript_frameworks_compat.js"></script>
        <script src="../_static/doctools.js"></script>
        <script>window.MathJax = {"options": {"processHtmlClass": "tex2jax_process|mathjax_process|math|output_area"}}</script>
        <script defer="defer" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script src="../_static/js/theme.js"></script>
    <link rel="index" title="Index" href="../genindex.html" />
    <link rel="search" title="Search" href="../search.html" />
    <link rel="next" title="Elasticity" href="demo_elasticity.html" />
    <link rel="prev" title="Cahn-Hilliard equation" href="demo_cahn-hilliard.html" /> 
</head>

<body class="wy-body-for-nav"> 
  <div class="wy-grid-for-nav">
    <nav data-toggle="wy-nav-shift" class="wy-nav-side">
      <div class="wy-side-scroll">
        <div class="wy-side-nav-search" >
            <a href="../index.html" class="icon icon-home"> DOLFINx
          </a>
              <div class="version">
                0.5.1
              </div>
<div role="search">
  <form id="rtd-search-form" class="wy-form" action="../search.html" method="get">
    <input type="text" name="q" placeholder="Search docs" />
    <input type="hidden" name="check_keywords" value="yes" />
    <input type="hidden" name="area" value="default" />
  </form>
</div>
        </div><div class="wy-menu wy-menu-vertical" data-spy="affix" role="navigation" aria-label="Navigation menu">
              <ul class="current">
<li class="toctree-l1"><a class="reference internal" href="../installation.html">Installation</a></li>
<li class="toctree-l1 current"><a class="reference internal" href="../demos.html">Demos</a><ul class="current">
<li class="toctree-l2"><a class="reference internal" href="../demos.html#introductory-demos">Introductory demos</a></li>
<li class="toctree-l2"><a class="reference internal" href="../demos.html#advanced-demos">Advanced demos</a></li>
<li class="toctree-l2 current"><a class="reference internal" href="../demos.html#all-demos">All demos</a><ul class="current">
<li class="toctree-l3"><a class="reference internal" href="demo_poisson.html">Poisson equation</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_cahn-hilliard.html">Cahn-Hilliard equation</a></li>
<li class="toctree-l3 current"><a class="current reference internal" href="#">Stokes equations with Taylor-Hood elements</a><ul>
<li class="toctree-l4"><a class="reference internal" href="#equation-and-problem-definition">Equation and problem definition</a></li>
<li class="toctree-l4"><a class="reference internal" href="#implementation">Implementation</a></li>
</ul>
</li>
<li class="toctree-l3"><a class="reference internal" href="demo_elasticity.html">Elasticity</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_gmsh.html">Mesh generation with Gmsh</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_helmholtz.html">Helmholtz equation</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_static-condensation.html">Static condensation of linear elasticity</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_pyvista.html">Visualization with pyvista</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_interpolation-io.html">Interpolation and IO</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_types.html">Solving PDEs with different scalar (float) types</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_lagrange_variants.html">Variants of Lagrange elements</a></li>
<li class="toctree-l3"><a class="reference internal" href="demo_tnt-elements.html">Creating TNT elements using Basix’s custom element interface</a></li>
</ul>
</li>
</ul>
</li>
<li class="toctree-l1"><a class="reference internal" href="../api.html">API reference</a></li>
<li class="toctree-l1"><a class="reference internal" href="../developer.html">Developer resources</a></li>
<li class="toctree-l1"><a class="reference internal" href="../contributing.html">Contributing</a></li>
</ul>

        </div>
      </div>
    </nav>

    <section data-toggle="wy-nav-shift" class="wy-nav-content-wrap"><nav class="wy-nav-top" aria-label="Mobile navigation menu" >
          <i data-toggle="wy-nav-top" class="fa fa-bars"></i>
          <a href="../index.html">DOLFINx</a>
      </nav>

      <div class="wy-nav-content">
        <div class="rst-content">
          <div role="navigation" aria-label="Page navigation">
  <ul class="wy-breadcrumbs">
      <li><a href="../index.html" class="icon icon-home"></a> &raquo;</li>
          <li><a href="../demos.html">Demos</a> &raquo;</li>
      <li>Stokes equations with Taylor-Hood elements</li>
      <li class="wy-breadcrumbs-aside">
            <a href="../_sources/demos/demo_stokes.md.txt" rel="nofollow"> View page source</a>
      </li>
  </ul>
  <hr/>
</div>
          <div role="main" class="document" itemscope="itemscope" itemtype="http://schema.org/Article">
           <div itemprop="articleBody">
             
  <section class="tex2jax_ignore mathjax_ignore" id="stokes-equations-with-taylor-hood-elements">
<h1>Stokes equations with Taylor-Hood elements<a class="headerlink" href="#stokes-equations-with-taylor-hood-elements" title="Permalink to this heading"></a></h1>
<p>This demo shows how to solve the Stokes problem using Taylor-Hood
elements with a range of different linear solvers.</p>
<section id="equation-and-problem-definition">
<h2>Equation and problem definition<a class="headerlink" href="#equation-and-problem-definition" title="Permalink to this heading"></a></h2>
<section id="strong-formulation">
<h3>Strong formulation<a class="headerlink" href="#strong-formulation" title="Permalink to this heading"></a></h3>
<div class="math notranslate nohighlight">
\[ \begin{align}\begin{aligned}
- \nabla \cdot (\nabla u + p I) &amp;= f \quad {\rm in} \ \Omega,\\\nabla \cdot u &amp;= 0 \quad {\rm in} \ \Omega.
\end{aligned}\end{align} \]</div>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The sign of the pressure has been flipped from the classical
definition. This is done in order to have a symmetric system
of equations rather than a non-symmetric system of equations.</p>
</div>
<p>A typical set of boundary conditions on the boundary <span class="math notranslate nohighlight">\(\partial
\Omega = \Gamma_{D} \cup \Gamma_{N}\)</span> can be:</p>
<div class="math notranslate nohighlight">
\[ \begin{align}\begin{aligned}
u &amp;= u_0 \quad {\rm on} \ \Gamma_{D},\\\nabla u \cdot n + p n &amp;= g \,   \quad\;\; {\rm on} \ \Gamma_{N}.
\end{aligned}\end{align} \]</div>
</section>
<section id="weak-formulation">
<h3>Weak formulation<a class="headerlink" href="#weak-formulation" title="Permalink to this heading"></a></h3>
<p>We formulate the Stokes equations’ mixed variational form; that is, a
form where the two variables, the velocity and the pressure, are
approximated. We have the problem: find <span class="math notranslate nohighlight">\((u, p) \in W\)</span> such that</p>
<div class="math notranslate nohighlight">
\[
a((u, p), (v, q)) = L((v, q))
\]</div>
<p>for all <span class="math notranslate nohighlight">\((v, q) \in W\)</span>, where</p>
<div class="math notranslate nohighlight">
\[ \begin{align}\begin{aligned}
a((u, p), (v, q)) &amp;:= \int_{\Omega} \nabla u \cdot \nabla v -
           \nabla \cdot v \ p + \nabla \cdot u \ q \, {\rm d} x,\\L((v, q)) &amp;:= \int_{\Omega} f \cdot v \, {\rm d} x + \int_{\partial
           \Omega_N} g \cdot v \, {\rm d} s.
\end{aligned}\end{align} \]</div>
<p>The space <span class="math notranslate nohighlight">\(W\)</span> is a mixed (product) function space <span class="math notranslate nohighlight">\(W = V
\times Q\)</span>, such that <span class="math notranslate nohighlight">\(u \in V\)</span> and <span class="math notranslate nohighlight">\(q \in Q\)</span>.</p>
</section>
<section id="domain-and-boundary-conditions">
<h3>Domain and boundary conditions<a class="headerlink" href="#domain-and-boundary-conditions" title="Permalink to this heading"></a></h3>
<p>We define the lid-driven cavity problem with the following
domain and boundary conditions:</p>
<ul class="simple">
<li><p><span class="math notranslate nohighlight">\(\Omega = [0,1]\times[0,1]\)</span> (a unit square)</p></li>
<li><p><span class="math notranslate nohighlight">\(\Gamma_D = \partial \Omega\)</span></p></li>
<li><p><span class="math notranslate nohighlight">\(u_0 = (1, 0)^\top\)</span> at <span class="math notranslate nohighlight">\(x_1 = 1\)</span> and <span class="math notranslate nohighlight">\(u_0 = (0,
0)^\top\)</span> otherwise</p></li>
<li><p><span class="math notranslate nohighlight">\(f = (0, 0)^\top\)</span></p></li>
</ul>
</section>
</section>
<section id="implementation">
<h2>Implementation<a class="headerlink" href="#implementation" title="Permalink to this heading"></a></h2>
<p>We first import the modules and functions that the program uses:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>

<span class="kn">import</span> <span class="nn">ufl</span>
<span class="kn">from</span> <span class="nn">dolfinx</span> <span class="kn">import</span> <span class="n">cpp</span> <span class="k">as</span> <span class="n">_cpp</span>
<span class="kn">from</span> <span class="nn">dolfinx</span> <span class="kn">import</span> <span class="n">fem</span>
<span class="kn">from</span> <span class="nn">dolfinx.fem</span> <span class="kn">import</span> <span class="p">(</span><span class="n">Constant</span><span class="p">,</span> <span class="n">Function</span><span class="p">,</span> <span class="n">FunctionSpace</span><span class="p">,</span> <span class="n">dirichletbc</span><span class="p">,</span>
                         <span class="n">extract_function_spaces</span><span class="p">,</span> <span class="n">form</span><span class="p">,</span>
                         <span class="n">locate_dofs_geometrical</span><span class="p">,</span> <span class="n">locate_dofs_topological</span><span class="p">)</span>
<span class="kn">from</span> <span class="nn">dolfinx.io</span> <span class="kn">import</span> <span class="n">XDMFFile</span>
<span class="kn">from</span> <span class="nn">dolfinx.mesh</span> <span class="kn">import</span> <span class="p">(</span><span class="n">CellType</span><span class="p">,</span> <span class="n">GhostMode</span><span class="p">,</span> <span class="n">create_rectangle</span><span class="p">,</span>
                          <span class="n">locate_entities_boundary</span><span class="p">)</span>
<span class="kn">from</span> <span class="nn">ufl</span> <span class="kn">import</span> <span class="n">div</span><span class="p">,</span> <span class="n">dx</span><span class="p">,</span> <span class="n">grad</span><span class="p">,</span> <span class="n">inner</span>

<span class="kn">from</span> <span class="nn">mpi4py</span> <span class="kn">import</span> <span class="n">MPI</span>
<span class="kn">from</span> <span class="nn">petsc4py</span> <span class="kn">import</span> <span class="n">PETSc</span>
</pre></div>
</div>
<p>We create a <a class="reference internal" href="../generated/dolfinx.mesh.html#dolfinx.mesh.Mesh" title="dolfinx.mesh.Mesh"><code class="xref py py-class docutils literal notranslate"><span class="pre">Mesh</span></code></a>, define functions to
geometrically locate subsets of its boundary and define a function
describing the velocity to be imposed as a boundary condition in a lid
driven cavity problem:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Create mesh</span>
<span class="n">msh</span> <span class="o">=</span> <span class="n">create_rectangle</span><span class="p">(</span><span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="p">,</span>
                       <span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">]),</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">])],</span>
                       <span class="p">[</span><span class="mi">32</span><span class="p">,</span> <span class="mi">32</span><span class="p">],</span>
                       <span class="n">CellType</span><span class="o">.</span><span class="n">triangle</span><span class="p">,</span> <span class="n">GhostMode</span><span class="o">.</span><span class="n">none</span><span class="p">)</span>


<span class="c1"># Function to mark x = 0, x = 1 and y = 0</span>
<span class="k">def</span> <span class="nf">noslip_boundary</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">logical_or</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">logical_or</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">x</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mf">0.0</span><span class="p">),</span>
                                       <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">x</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="mf">1.0</span><span class="p">)),</span>
                         <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">x</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mf">0.0</span><span class="p">))</span>


<span class="c1"># Function to mark the lid (y = 1)</span>
<span class="k">def</span> <span class="nf">lid</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">x</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span> <span class="mf">1.0</span><span class="p">)</span>


<span class="c1"># Lid velocity</span>
<span class="k">def</span> <span class="nf">lid_velocity_expression</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">stack</span><span class="p">((</span><span class="n">np</span><span class="o">.</span><span class="n">ones</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">shape</span><span class="p">[</span><span class="mi">1</span><span class="p">])))</span>
</pre></div>
</div>
<p>We define two <a class="reference internal" href="../generated/dolfinx.fem.html#dolfinx.fem.FunctionSpace" title="dolfinx.fem.FunctionSpace"><code class="xref py py-class docutils literal notranslate"><span class="pre">FunctionSpace</span></code></a>
instances with different finite elements. <code class="docutils literal notranslate"><span class="pre">P2</span></code> corresponds to a continuous
piecewise quadratic basis for the velocity field and <code class="docutils literal notranslate"><span class="pre">P1</span></code> to a continuous
piecewise linear basis for the pressure field:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">P2</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">VectorElement</span><span class="p">(</span><span class="s2">&quot;Lagrange&quot;</span><span class="p">,</span> <span class="n">msh</span><span class="o">.</span><span class="n">ufl_cell</span><span class="p">(),</span> <span class="mi">2</span><span class="p">)</span>
<span class="n">P1</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">FiniteElement</span><span class="p">(</span><span class="s2">&quot;Lagrange&quot;</span><span class="p">,</span> <span class="n">msh</span><span class="o">.</span><span class="n">ufl_cell</span><span class="p">(),</span> <span class="mi">1</span><span class="p">)</span>
<span class="n">V</span><span class="p">,</span> <span class="n">Q</span> <span class="o">=</span> <span class="n">FunctionSpace</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="n">P2</span><span class="p">),</span> <span class="n">FunctionSpace</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="n">P1</span><span class="p">)</span>
</pre></div>
</div>
<p>We define boundary conditions:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># No-slip boundary condition for velocity field (`V`) on boundaries</span>
<span class="c1"># where x = 0, x = 1, and y = 0</span>
<span class="n">noslip</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">(</span><span class="n">msh</span><span class="o">.</span><span class="n">geometry</span><span class="o">.</span><span class="n">dim</span><span class="p">,</span> <span class="n">dtype</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">ScalarType</span><span class="p">)</span>
<span class="n">facets</span> <span class="o">=</span> <span class="n">locate_entities_boundary</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">noslip_boundary</span><span class="p">)</span>
<span class="n">bc0</span> <span class="o">=</span> <span class="n">dirichletbc</span><span class="p">(</span><span class="n">noslip</span><span class="p">,</span> <span class="n">locate_dofs_topological</span><span class="p">(</span><span class="n">V</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">facets</span><span class="p">),</span> <span class="n">V</span><span class="p">)</span>

<span class="c1"># Driving velocity condition u = (1, 0) on top boundary (y = 1)</span>
<span class="n">lid_velocity</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">V</span><span class="p">)</span>
<span class="n">lid_velocity</span><span class="o">.</span><span class="n">interpolate</span><span class="p">(</span><span class="n">lid_velocity_expression</span><span class="p">)</span>
<span class="n">facets</span> <span class="o">=</span> <span class="n">locate_entities_boundary</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">lid</span><span class="p">)</span>
<span class="n">bc1</span> <span class="o">=</span> <span class="n">dirichletbc</span><span class="p">(</span><span class="n">lid_velocity</span><span class="p">,</span> <span class="n">locate_dofs_topological</span><span class="p">(</span><span class="n">V</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">facets</span><span class="p">))</span>

<span class="c1"># Collect Dirichlet boundary conditions</span>
<span class="n">bcs</span> <span class="o">=</span> <span class="p">[</span><span class="n">bc0</span><span class="p">,</span> <span class="n">bc1</span><span class="p">]</span>
</pre></div>
</div>
<p>We now define the bilinear and linear forms corresponding to the weak
mixed formulation of the Stokes equations in a blocked structure:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Define variational problem</span>
<span class="p">(</span><span class="n">u</span><span class="p">,</span> <span class="n">p</span><span class="p">)</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TrialFunction</span><span class="p">(</span><span class="n">V</span><span class="p">),</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TrialFunction</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="p">(</span><span class="n">v</span><span class="p">,</span> <span class="n">q</span><span class="p">)</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TestFunction</span><span class="p">(</span><span class="n">V</span><span class="p">),</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TestFunction</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="n">f</span> <span class="o">=</span> <span class="n">Constant</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="p">(</span><span class="n">PETSc</span><span class="o">.</span><span class="n">ScalarType</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">ScalarType</span><span class="p">(</span><span class="mi">0</span><span class="p">)))</span>

<span class="n">a</span> <span class="o">=</span> <span class="n">form</span><span class="p">([[</span><span class="n">inner</span><span class="p">(</span><span class="n">grad</span><span class="p">(</span><span class="n">u</span><span class="p">),</span> <span class="n">grad</span><span class="p">(</span><span class="n">v</span><span class="p">))</span> <span class="o">*</span> <span class="n">dx</span><span class="p">,</span> <span class="n">inner</span><span class="p">(</span><span class="n">p</span><span class="p">,</span> <span class="n">div</span><span class="p">(</span><span class="n">v</span><span class="p">))</span> <span class="o">*</span> <span class="n">dx</span><span class="p">],</span>
          <span class="p">[</span><span class="n">inner</span><span class="p">(</span><span class="n">div</span><span class="p">(</span><span class="n">u</span><span class="p">),</span> <span class="n">q</span><span class="p">)</span> <span class="o">*</span> <span class="n">dx</span><span class="p">,</span> <span class="kc">None</span><span class="p">]])</span>
<span class="n">L</span> <span class="o">=</span> <span class="n">form</span><span class="p">([</span><span class="n">inner</span><span class="p">(</span><span class="n">f</span><span class="p">,</span> <span class="n">v</span><span class="p">)</span> <span class="o">*</span> <span class="n">dx</span><span class="p">,</span> <span class="n">inner</span><span class="p">(</span><span class="n">Constant</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">ScalarType</span><span class="p">(</span><span class="mi">0</span><span class="p">)),</span> <span class="n">q</span><span class="p">)</span> <span class="o">*</span> <span class="n">dx</span><span class="p">])</span>
</pre></div>
</div>
<p>We will use a block-diagonal preconditioner to solve this problem:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">a_p11</span> <span class="o">=</span> <span class="n">form</span><span class="p">(</span><span class="n">inner</span><span class="p">(</span><span class="n">p</span><span class="p">,</span> <span class="n">q</span><span class="p">)</span> <span class="o">*</span> <span class="n">dx</span><span class="p">)</span>
<span class="n">a_p</span> <span class="o">=</span> <span class="p">[[</span><span class="n">a</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">],</span> <span class="kc">None</span><span class="p">],</span>
       <span class="p">[</span><span class="kc">None</span><span class="p">,</span> <span class="n">a_p11</span><span class="p">]]</span>
</pre></div>
</div>
<section id="nested-matrix-solver">
<h3>Nested matrix solver<a class="headerlink" href="#nested-matrix-solver" title="Permalink to this heading"></a></h3>
<p>We now assemble the bilinear form into a nested matrix <code class="docutils literal notranslate"><span class="pre">A</span></code>, and call
the <code class="docutils literal notranslate"><span class="pre">assemble()</span></code> method to communicate shared entries in parallel.
Rows and columns in <code class="docutils literal notranslate"><span class="pre">A</span></code> that correspond to degrees-of-freedom with
Dirichlet boundary conditions are zeroed and a value of 1 is set on
the diagonal.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">A</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_matrix_nest</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>
<span class="n">A</span><span class="o">.</span><span class="n">assemble</span><span class="p">()</span>
</pre></div>
</div>
<p>We create a nested matrix <code class="docutils literal notranslate"><span class="pre">P</span></code> to use as the preconditioner. The
top-left block of <code class="docutils literal notranslate"><span class="pre">P</span></code> is shared with the top-left block of <code class="docutils literal notranslate"><span class="pre">A</span></code>. The
bottom-right diagonal entry is assembled from the form <code class="docutils literal notranslate"><span class="pre">a_p11</span></code>:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">P11</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_matrix</span><span class="p">(</span><span class="n">a_p11</span><span class="p">,</span> <span class="p">[])</span>
<span class="n">P</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">Mat</span><span class="p">()</span><span class="o">.</span><span class="n">createNest</span><span class="p">([[</span><span class="n">A</span><span class="o">.</span><span class="n">getNestSubMatrix</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">),</span> <span class="kc">None</span><span class="p">],</span> <span class="p">[</span><span class="kc">None</span><span class="p">,</span> <span class="n">P11</span><span class="p">]])</span>
<span class="n">P</span><span class="o">.</span><span class="n">assemble</span><span class="p">()</span>
</pre></div>
</div>
<p>Next, the right-hand side vector is assembled and then modified to
account for non-homogeneous Dirichlet boundary conditions:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">b</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_vector_nest</span><span class="p">(</span><span class="n">L</span><span class="p">)</span>

<span class="c1"># Modify (&#39;lift&#39;) the RHS for Dirichlet boundary conditions</span>
<span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">apply_lifting_nest</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>

<span class="c1"># Sum contributions from ghost entries on the owner</span>
<span class="k">for</span> <span class="n">b_sub</span> <span class="ow">in</span> <span class="n">b</span><span class="o">.</span><span class="n">getNestSubVecs</span><span class="p">():</span>
    <span class="n">b_sub</span><span class="o">.</span><span class="n">ghostUpdate</span><span class="p">(</span><span class="n">addv</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">InsertMode</span><span class="o">.</span><span class="n">ADD</span><span class="p">,</span> <span class="n">mode</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">ScatterMode</span><span class="o">.</span><span class="n">REVERSE</span><span class="p">)</span>

<span class="c1"># Set Dirichlet boundary condition values in the RHS</span>
<span class="n">bcs0</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">bcs_by_block</span><span class="p">(</span><span class="n">extract_function_spaces</span><span class="p">(</span><span class="n">L</span><span class="p">),</span> <span class="n">bcs</span><span class="p">)</span>
<span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">set_bc_nest</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">bcs0</span><span class="p">)</span>
</pre></div>
</div>
<p>The pressure field for this problem is determined only up to a
constant. We can supply the vector that spans the nullspace and any
component of the solution in this direction will be eliminated during
the iterative linear solution process.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Create nullspace vector</span>
<span class="n">null_vec</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">create_vector_nest</span><span class="p">(</span><span class="n">L</span><span class="p">)</span>

<span class="c1"># Set velocity part to zero and the pressure part to a non-zero constant</span>
<span class="n">null_vecs</span> <span class="o">=</span> <span class="n">null_vec</span><span class="o">.</span><span class="n">getNestSubVecs</span><span class="p">()</span>
<span class="n">null_vecs</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="mf">0.0</span><span class="p">),</span> <span class="n">null_vecs</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="mf">1.0</span><span class="p">)</span>

<span class="c1"># Normalize the vector, create a nullspace object, and attach it to the</span>
<span class="c1"># matrix</span>
<span class="n">null_vec</span><span class="o">.</span><span class="n">normalize</span><span class="p">()</span>
<span class="n">nsp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">NullSpace</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">vectors</span><span class="o">=</span><span class="p">[</span><span class="n">null_vec</span><span class="p">])</span>
<span class="k">assert</span> <span class="n">nsp</span><span class="o">.</span><span class="n">test</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
<span class="n">A</span><span class="o">.</span><span class="n">setNullSpace</span><span class="p">(</span><span class="n">nsp</span><span class="p">)</span>
</pre></div>
</div>
<p>Now we create a Krylov Subspace Solver <code class="docutils literal notranslate"><span class="pre">ksp</span></code>. We configure it to use
the MINRES method, and a block-diagonal preconditioner using PETSc’s
additive fieldsplit type preconditioner:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">ksp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">KSP</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">msh</span><span class="o">.</span><span class="n">comm</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setOperators</span><span class="p">(</span><span class="n">A</span><span class="p">,</span> <span class="n">P</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;minres&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setTolerances</span><span class="p">(</span><span class="n">rtol</span><span class="o">=</span><span class="mf">1e-9</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;fieldsplit&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFieldSplitType</span><span class="p">(</span><span class="n">PETSc</span><span class="o">.</span><span class="n">PC</span><span class="o">.</span><span class="n">CompositeType</span><span class="o">.</span><span class="n">ADDITIVE</span><span class="p">)</span>

<span class="c1"># Define the matrix blocks in the preconditioner with the velocity and</span>
<span class="c1"># pressure matrix index sets</span>
<span class="n">nested_IS</span> <span class="o">=</span> <span class="n">P</span><span class="o">.</span><span class="n">getNestISs</span><span class="p">()</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFieldSplitIS</span><span class="p">(</span>
    <span class="p">(</span><span class="s2">&quot;u&quot;</span><span class="p">,</span> <span class="n">nested_IS</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]),</span>
    <span class="p">(</span><span class="s2">&quot;p&quot;</span><span class="p">,</span> <span class="n">nested_IS</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]))</span>

<span class="c1"># Set the preconditioners for each block</span>
<span class="n">ksp_u</span><span class="p">,</span> <span class="n">ksp_p</span> <span class="o">=</span> <span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">getFieldSplitSubKSP</span><span class="p">()</span>
<span class="n">ksp_u</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp_u</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;gamg&quot;</span><span class="p">)</span>
<span class="n">ksp_p</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp_p</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;jacobi&quot;</span><span class="p">)</span>

<span class="c1"># Monitor the convergence of the KSP</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setFromOptions</span><span class="p">()</span>
</pre></div>
</div>
<p>To compute the solution, we create finite element <a class="reference internal" href="../generated/dolfinx.fem.html#dolfinx.fem.Function" title="dolfinx.fem.Function"><code class="xref py py-class docutils literal notranslate"><span class="pre">Function</span></code></a> for the velocity (on the space <code class="docutils literal notranslate"><span class="pre">V</span></code>) and
for the pressure (on the space <code class="docutils literal notranslate"><span class="pre">Q</span></code>). The vectors for <code class="docutils literal notranslate"><span class="pre">u</span></code> and <code class="docutils literal notranslate"><span class="pre">p</span></code> are
combined to form a nested vector and the system is solved:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">u</span><span class="p">,</span> <span class="n">p</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">V</span><span class="p">),</span> <span class="n">Function</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">Vec</span><span class="p">()</span><span class="o">.</span><span class="n">createNest</span><span class="p">([</span><span class="n">_cpp</span><span class="o">.</span><span class="n">la</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">create_vector_wrap</span><span class="p">(</span><span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="p">),</span> <span class="n">_cpp</span><span class="o">.</span><span class="n">la</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">create_vector_wrap</span><span class="p">(</span><span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="p">)])</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">solve</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">x</span><span class="p">)</span>
</pre></div>
</div>
<p>Norms of the solution vectors are computed:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">norm_u_0</span> <span class="o">=</span> <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="n">norm_p_0</span> <span class="o">=</span> <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="k">if</span> <span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="o">.</span><span class="n">rank</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(A) Norm of velocity coefficient vector (nested, iterative): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_u_0</span><span class="p">))</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(A) Norm of pressure coefficient vector (nested, iterative): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_p_0</span><span class="p">))</span>
</pre></div>
</div>
<p>The solution fields can be saved to file in XDMF format for
visualization, e.g. with ParaView. Before writing to file, ghost values
are updated.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="k">with</span> <span class="n">XDMFFile</span><span class="p">(</span><span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="p">,</span> <span class="s2">&quot;out_stokes/velocity.xdmf&quot;</span><span class="p">,</span> <span class="s2">&quot;w&quot;</span><span class="p">)</span> <span class="k">as</span> <span class="n">ufile_xdmf</span><span class="p">:</span>
    <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">scatter_forward</span><span class="p">()</span>
    <span class="n">ufile_xdmf</span><span class="o">.</span><span class="n">write_mesh</span><span class="p">(</span><span class="n">msh</span><span class="p">)</span>
    <span class="n">ufile_xdmf</span><span class="o">.</span><span class="n">write_function</span><span class="p">(</span><span class="n">u</span><span class="p">)</span>

<span class="k">with</span> <span class="n">XDMFFile</span><span class="p">(</span><span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="p">,</span> <span class="s2">&quot;out_stokes/pressure.xdmf&quot;</span><span class="p">,</span> <span class="s2">&quot;w&quot;</span><span class="p">)</span> <span class="k">as</span> <span class="n">pfile_xdmf</span><span class="p">:</span>
    <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">scatter_forward</span><span class="p">()</span>
    <span class="n">pfile_xdmf</span><span class="o">.</span><span class="n">write_mesh</span><span class="p">(</span><span class="n">msh</span><span class="p">)</span>
    <span class="n">pfile_xdmf</span><span class="o">.</span><span class="n">write_function</span><span class="p">(</span><span class="n">p</span><span class="p">)</span>
</pre></div>
</div>
</section>
<section id="monolithic-block-iterative-solver">
<h3>Monolithic block iterative solver<a class="headerlink" href="#monolithic-block-iterative-solver" title="Permalink to this heading"></a></h3>
<p>Next, we solve same problem, but now with monolithic (non-nested)
matrices and iterative solvers.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">A</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_matrix_block</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>
<span class="n">A</span><span class="o">.</span><span class="n">assemble</span><span class="p">()</span>
<span class="n">P</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_matrix_block</span><span class="p">(</span><span class="n">a_p</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>
<span class="n">P</span><span class="o">.</span><span class="n">assemble</span><span class="p">()</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_vector_block</span><span class="p">(</span><span class="n">L</span><span class="p">,</span> <span class="n">a</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>

<span class="c1"># Set near nullspace for pressure</span>
<span class="n">null_vec</span> <span class="o">=</span> <span class="n">A</span><span class="o">.</span><span class="n">createVecLeft</span><span class="p">()</span>
<span class="n">offset</span> <span class="o">=</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map</span><span class="o">.</span><span class="n">size_local</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span>
<span class="n">null_vec</span><span class="o">.</span><span class="n">array</span><span class="p">[</span><span class="n">offset</span><span class="p">:]</span> <span class="o">=</span> <span class="mf">1.0</span>
<span class="n">null_vec</span><span class="o">.</span><span class="n">normalize</span><span class="p">()</span>
<span class="n">nsp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">NullSpace</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">vectors</span><span class="o">=</span><span class="p">[</span><span class="n">null_vec</span><span class="p">])</span>
<span class="k">assert</span> <span class="n">nsp</span><span class="o">.</span><span class="n">test</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
<span class="n">A</span><span class="o">.</span><span class="n">setNullSpace</span><span class="p">(</span><span class="n">nsp</span><span class="p">)</span>

<span class="c1"># Build IndexSets for each field (global dof indices for each field)</span>
<span class="n">V_map</span> <span class="o">=</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map</span>
<span class="n">Q_map</span> <span class="o">=</span> <span class="n">Q</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map</span>
<span class="n">offset_u</span> <span class="o">=</span> <span class="n">V_map</span><span class="o">.</span><span class="n">local_range</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span> <span class="o">+</span> <span class="n">Q_map</span><span class="o">.</span><span class="n">local_range</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="n">offset_p</span> <span class="o">=</span> <span class="n">offset_u</span> <span class="o">+</span> <span class="n">V_map</span><span class="o">.</span><span class="n">size_local</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span>
<span class="n">is_u</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">IS</span><span class="p">()</span><span class="o">.</span><span class="n">createStride</span><span class="p">(</span><span class="n">V_map</span><span class="o">.</span><span class="n">size_local</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span><span class="p">,</span> <span class="n">offset_u</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">comm</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">COMM_SELF</span><span class="p">)</span>
<span class="n">is_p</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">IS</span><span class="p">()</span><span class="o">.</span><span class="n">createStride</span><span class="p">(</span><span class="n">Q_map</span><span class="o">.</span><span class="n">size_local</span><span class="p">,</span> <span class="n">offset_p</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">comm</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">COMM_SELF</span><span class="p">)</span>

<span class="c1"># Create Krylov solver</span>
<span class="n">ksp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">KSP</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">msh</span><span class="o">.</span><span class="n">comm</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setOperators</span><span class="p">(</span><span class="n">A</span><span class="p">,</span> <span class="n">P</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setTolerances</span><span class="p">(</span><span class="n">rtol</span><span class="o">=</span><span class="mf">1e-9</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;minres&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;fieldsplit&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFieldSplitType</span><span class="p">(</span><span class="n">PETSc</span><span class="o">.</span><span class="n">PC</span><span class="o">.</span><span class="n">CompositeType</span><span class="o">.</span><span class="n">ADDITIVE</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFieldSplitIS</span><span class="p">(</span>
    <span class="p">(</span><span class="s2">&quot;u&quot;</span><span class="p">,</span> <span class="n">is_u</span><span class="p">),</span>
    <span class="p">(</span><span class="s2">&quot;p&quot;</span><span class="p">,</span> <span class="n">is_p</span><span class="p">))</span>

<span class="c1"># Configure velocity and pressure sub KSPs</span>
<span class="n">ksp_u</span><span class="p">,</span> <span class="n">ksp_p</span> <span class="o">=</span> <span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">getFieldSplitSubKSP</span><span class="p">()</span>
<span class="n">ksp_u</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp_u</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;gamg&quot;</span><span class="p">)</span>
<span class="n">ksp_p</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp_p</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;jacobi&quot;</span><span class="p">)</span>

<span class="c1"># Monitor the convergence of the KSP</span>
<span class="n">opts</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">Options</span><span class="p">()</span>
<span class="n">opts</span><span class="p">[</span><span class="s2">&quot;ksp_monitor&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span>
<span class="n">opts</span><span class="p">[</span><span class="s2">&quot;ksp_view&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="kc">None</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setFromOptions</span><span class="p">()</span>
</pre></div>
</div>
<p>We also need to create a block vector, <code class="docutils literal notranslate"><span class="pre">x</span></code>, to store the (full)
solution, which we initialize using the block RHS form <code class="docutils literal notranslate"><span class="pre">L</span></code>.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Compute solution</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">A</span><span class="o">.</span><span class="n">createVecRight</span><span class="p">()</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">solve</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">x</span><span class="p">)</span>

<span class="c1"># Create Functions and scatter x solution</span>
<span class="n">u</span><span class="p">,</span> <span class="n">p</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">V</span><span class="p">),</span> <span class="n">Function</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="n">offset</span> <span class="o">=</span> <span class="n">V_map</span><span class="o">.</span><span class="n">size_local</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span>
<span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">array</span><span class="p">[:</span><span class="n">offset</span><span class="p">]</span> <span class="o">=</span> <span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">[:</span><span class="n">offset</span><span class="p">]</span>
<span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">array</span><span class="p">[:(</span><span class="nb">len</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">)</span> <span class="o">-</span> <span class="n">offset</span><span class="p">)]</span> <span class="o">=</span> <span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">[</span><span class="n">offset</span><span class="p">:]</span>
</pre></div>
</div>
<p>We can calculate the <span class="math notranslate nohighlight">\(L^2\)</span> norms of u and p as follows:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">norm_u_1</span> <span class="o">=</span> <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="n">norm_p_1</span> <span class="o">=</span> <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="k">if</span> <span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="o">.</span><span class="n">rank</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(B) Norm of velocity coefficient vector (blocked, iterative): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_u_1</span><span class="p">))</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(B) Norm of pressure coefficient vector (blocked, iterative): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_p_1</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">norm_u_1</span><span class="p">,</span> <span class="n">norm_u_0</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">norm_p_1</span><span class="p">,</span> <span class="n">norm_p_0</span><span class="p">)</span>
</pre></div>
</div>
</section>
<section id="monolithic-block-direct-solver">
<h3>Monolithic block direct solver<a class="headerlink" href="#monolithic-block-direct-solver" title="Permalink to this heading"></a></h3>
<p>Solve same problem, but now with monolithic matrices and a direct solver</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Create LU solver</span>
<span class="n">ksp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">KSP</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">msh</span><span class="o">.</span><span class="n">comm</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setOperators</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;lu&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFactorSolverType</span><span class="p">(</span><span class="s2">&quot;superlu_dist&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>We also need to create a block vector, <code class="docutils literal notranslate"><span class="pre">x</span></code>, to store the (full)
solution, which we initialize using the block RHS form <code class="docutils literal notranslate"><span class="pre">L</span></code>.</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Compute solution</span>
<span class="n">x</span> <span class="o">=</span> <span class="n">A</span><span class="o">.</span><span class="n">createVecLeft</span><span class="p">()</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">solve</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">x</span><span class="p">)</span>

<span class="c1"># Create Functions and scatter x solution</span>
<span class="n">u</span><span class="p">,</span> <span class="n">p</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">V</span><span class="p">),</span> <span class="n">Function</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="n">offset</span> <span class="o">=</span> <span class="n">V_map</span><span class="o">.</span><span class="n">size_local</span> <span class="o">*</span> <span class="n">V</span><span class="o">.</span><span class="n">dofmap</span><span class="o">.</span><span class="n">index_map_bs</span>
<span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">array</span><span class="p">[:</span><span class="n">offset</span><span class="p">]</span> <span class="o">=</span> <span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">[:</span><span class="n">offset</span><span class="p">]</span>
<span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">array</span><span class="p">[:(</span><span class="nb">len</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">)</span> <span class="o">-</span> <span class="n">offset</span><span class="p">)]</span> <span class="o">=</span> <span class="n">x</span><span class="o">.</span><span class="n">array_r</span><span class="p">[</span><span class="n">offset</span><span class="p">:]</span>
</pre></div>
</div>
<p>We can calculate the <span class="math notranslate nohighlight">\(L^2\)</span> norms of u and p as follows:</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="n">norm_u_2</span> <span class="o">=</span> <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="n">norm_p_2</span> <span class="o">=</span> <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="k">if</span> <span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="o">.</span><span class="n">rank</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(C) Norm of velocity coefficient vector (blocked, direct): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_u_2</span><span class="p">))</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(C) Norm of pressure coefficient vector (blocked, direct): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_p_2</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">norm_u_2</span><span class="p">,</span> <span class="n">norm_u_0</span><span class="p">)</span>
<span class="k">assert</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">norm_p_2</span><span class="p">,</span> <span class="n">norm_p_0</span><span class="p">)</span>
</pre></div>
</div>
</section>
<section id="non-blocked-direct-solver">
<h3>Non-blocked direct solver<a class="headerlink" href="#non-blocked-direct-solver" title="Permalink to this heading"></a></h3>
<p>Again, solve the same problem but this time with a non-blocked direct
solver approach</p>
<div class="highlight-python notranslate"><div class="highlight"><pre><span></span><span class="c1"># Create the function space</span>
<span class="n">TH</span> <span class="o">=</span> <span class="n">P2</span> <span class="o">*</span> <span class="n">P1</span>
<span class="n">W</span> <span class="o">=</span> <span class="n">FunctionSpace</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="n">TH</span><span class="p">)</span>
<span class="n">W0</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">.</span><span class="n">collapse</span><span class="p">()</span>

<span class="c1"># No slip boundary condition</span>
<span class="n">noslip</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">V</span><span class="p">)</span>
<span class="n">facets</span> <span class="o">=</span> <span class="n">locate_entities_boundary</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">noslip_boundary</span><span class="p">)</span>
<span class="n">dofs</span> <span class="o">=</span> <span class="n">locate_dofs_topological</span><span class="p">((</span><span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="n">V</span><span class="p">),</span> <span class="mi">1</span><span class="p">,</span> <span class="n">facets</span><span class="p">)</span>
<span class="n">bc0</span> <span class="o">=</span> <span class="n">dirichletbc</span><span class="p">(</span><span class="n">noslip</span><span class="p">,</span> <span class="n">dofs</span><span class="p">,</span> <span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span>


<span class="c1"># Driving velocity condition u = (1, 0) on top boundary (y = 1)</span>
<span class="n">lid_velocity</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">W0</span><span class="p">)</span>
<span class="n">lid_velocity</span><span class="o">.</span><span class="n">interpolate</span><span class="p">(</span><span class="n">lid_velocity_expression</span><span class="p">)</span>
<span class="n">facets</span> <span class="o">=</span> <span class="n">locate_entities_boundary</span><span class="p">(</span><span class="n">msh</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">lid</span><span class="p">)</span>
<span class="n">dofs</span> <span class="o">=</span> <span class="n">locate_dofs_topological</span><span class="p">((</span><span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span> <span class="n">V</span><span class="p">),</span> <span class="mi">1</span><span class="p">,</span> <span class="n">facets</span><span class="p">)</span>
<span class="n">bc1</span> <span class="o">=</span> <span class="n">dirichletbc</span><span class="p">(</span><span class="n">lid_velocity</span><span class="p">,</span> <span class="n">dofs</span><span class="p">,</span> <span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span>


<span class="c1"># Since for this problem the pressure is only determined up to a</span>
<span class="c1"># constant, we pin the pressure at the point (0, 0)</span>
<span class="n">zero</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">Q</span><span class="p">)</span>
<span class="n">zero</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="mf">0.0</span><span class="p">)</span>
<span class="n">dofs</span> <span class="o">=</span> <span class="n">locate_dofs_geometrical</span><span class="p">((</span><span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">1</span><span class="p">),</span> <span class="n">Q</span><span class="p">),</span> <span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">x</span><span class="o">.</span><span class="n">T</span><span class="p">,</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">])</span><span class="o">.</span><span class="n">all</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">))</span>
<span class="n">bc2</span> <span class="o">=</span> <span class="n">dirichletbc</span><span class="p">(</span><span class="n">zero</span><span class="p">,</span> <span class="n">dofs</span><span class="p">,</span> <span class="n">W</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span>

<span class="c1"># Collect Dirichlet boundary conditions</span>
<span class="n">bcs</span> <span class="o">=</span> <span class="p">[</span><span class="n">bc0</span><span class="p">,</span> <span class="n">bc1</span><span class="p">,</span> <span class="n">bc2</span><span class="p">]</span>

<span class="c1"># Define variational problem</span>
<span class="p">(</span><span class="n">u</span><span class="p">,</span> <span class="n">p</span><span class="p">)</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TrialFunctions</span><span class="p">(</span><span class="n">W</span><span class="p">)</span>
<span class="p">(</span><span class="n">v</span><span class="p">,</span> <span class="n">q</span><span class="p">)</span> <span class="o">=</span> <span class="n">ufl</span><span class="o">.</span><span class="n">TestFunctions</span><span class="p">(</span><span class="n">W</span><span class="p">)</span>
<span class="n">f</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">W0</span><span class="p">)</span>
<span class="n">a</span> <span class="o">=</span> <span class="n">form</span><span class="p">((</span><span class="n">inner</span><span class="p">(</span><span class="n">grad</span><span class="p">(</span><span class="n">u</span><span class="p">),</span> <span class="n">grad</span><span class="p">(</span><span class="n">v</span><span class="p">))</span> <span class="o">+</span> <span class="n">inner</span><span class="p">(</span><span class="n">p</span><span class="p">,</span> <span class="n">div</span><span class="p">(</span><span class="n">v</span><span class="p">))</span> <span class="o">+</span> <span class="n">inner</span><span class="p">(</span><span class="n">div</span><span class="p">(</span><span class="n">u</span><span class="p">),</span> <span class="n">q</span><span class="p">))</span> <span class="o">*</span> <span class="n">dx</span><span class="p">)</span>
<span class="n">L</span> <span class="o">=</span> <span class="n">form</span><span class="p">(</span><span class="n">inner</span><span class="p">(</span><span class="n">f</span><span class="p">,</span> <span class="n">v</span><span class="p">)</span> <span class="o">*</span> <span class="n">dx</span><span class="p">)</span>


<span class="c1"># Assemble LHS matrix and RHS vector</span>
<span class="n">A</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_matrix</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">bcs</span><span class="o">=</span><span class="n">bcs</span><span class="p">)</span>
<span class="n">A</span><span class="o">.</span><span class="n">assemble</span><span class="p">()</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">assemble_vector</span><span class="p">(</span><span class="n">L</span><span class="p">)</span>

<span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">apply_lifting</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="p">[</span><span class="n">a</span><span class="p">],</span> <span class="n">bcs</span><span class="o">=</span><span class="p">[</span><span class="n">bcs</span><span class="p">])</span>
<span class="n">b</span><span class="o">.</span><span class="n">ghostUpdate</span><span class="p">(</span><span class="n">addv</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">InsertMode</span><span class="o">.</span><span class="n">ADD</span><span class="p">,</span> <span class="n">mode</span><span class="o">=</span><span class="n">PETSc</span><span class="o">.</span><span class="n">ScatterMode</span><span class="o">.</span><span class="n">REVERSE</span><span class="p">)</span>

<span class="c1"># Set Dirichlet boundary condition values in the RHS</span>
<span class="n">fem</span><span class="o">.</span><span class="n">petsc</span><span class="o">.</span><span class="n">set_bc</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">bcs</span><span class="p">)</span>

<span class="c1"># Create and configure solver</span>
<span class="n">ksp</span> <span class="o">=</span> <span class="n">PETSc</span><span class="o">.</span><span class="n">KSP</span><span class="p">()</span><span class="o">.</span><span class="n">create</span><span class="p">(</span><span class="n">msh</span><span class="o">.</span><span class="n">comm</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setOperators</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;preonly&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setType</span><span class="p">(</span><span class="s2">&quot;lu&quot;</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">getPC</span><span class="p">()</span><span class="o">.</span><span class="n">setFactorSolverType</span><span class="p">(</span><span class="s2">&quot;superlu_dist&quot;</span><span class="p">)</span>

<span class="c1"># Compute the solution</span>
<span class="n">U</span> <span class="o">=</span> <span class="n">Function</span><span class="p">(</span><span class="n">W</span><span class="p">)</span>
<span class="n">ksp</span><span class="o">.</span><span class="n">solve</span><span class="p">(</span><span class="n">b</span><span class="p">,</span> <span class="n">U</span><span class="o">.</span><span class="n">vector</span><span class="p">)</span>

<span class="c1"># Split the mixed solution and collapse</span>
<span class="n">u</span> <span class="o">=</span> <span class="n">U</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">.</span><span class="n">collapse</span><span class="p">()</span>
<span class="n">p</span> <span class="o">=</span> <span class="n">U</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span><span class="o">.</span><span class="n">collapse</span><span class="p">()</span>

<span class="c1"># Compute norms</span>
<span class="n">norm_u_3</span> <span class="o">=</span> <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="n">norm_p_3</span> <span class="o">=</span> <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">norm</span><span class="p">()</span>
<span class="k">if</span> <span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="o">.</span><span class="n">rank</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(D) Norm of velocity coefficient vector (monolithic, direct): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_u_3</span><span class="p">))</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;(D) Norm of pressure coefficient vector (monolithic, direct): </span><span class="si">{}</span><span class="s2">&quot;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">norm_p_3</span><span class="p">))</span>
<span class="k">assert</span> <span class="n">np</span><span class="o">.</span><span class="n">isclose</span><span class="p">(</span><span class="n">norm_u_3</span><span class="p">,</span> <span class="n">norm_u_0</span><span class="p">)</span>

<span class="c1"># Write the solution to file</span>
<span class="k">with</span> <span class="n">XDMFFile</span><span class="p">(</span><span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="p">,</span> <span class="s2">&quot;out_stokes/new_velocity.xdmf&quot;</span><span class="p">,</span> <span class="s2">&quot;w&quot;</span><span class="p">)</span> <span class="k">as</span> <span class="n">ufile_xdmf</span><span class="p">:</span>
    <span class="n">u</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">scatter_forward</span><span class="p">()</span>
    <span class="n">ufile_xdmf</span><span class="o">.</span><span class="n">write_mesh</span><span class="p">(</span><span class="n">msh</span><span class="p">)</span>
    <span class="n">ufile_xdmf</span><span class="o">.</span><span class="n">write_function</span><span class="p">(</span><span class="n">u</span><span class="p">)</span>

<span class="k">with</span> <span class="n">XDMFFile</span><span class="p">(</span><span class="n">MPI</span><span class="o">.</span><span class="n">COMM_WORLD</span><span class="p">,</span> <span class="s2">&quot;out_stokes/my.xdmf&quot;</span><span class="p">,</span> <span class="s2">&quot;w&quot;</span><span class="p">)</span> <span class="k">as</span> <span class="n">pfile_xdmf</span><span class="p">:</span>
    <span class="n">p</span><span class="o">.</span><span class="n">x</span><span class="o">.</span><span class="n">scatter_forward</span><span class="p">()</span>
    <span class="n">pfile_xdmf</span><span class="o">.</span><span class="n">write_mesh</span><span class="p">(</span><span class="n">msh</span><span class="p">)</span>
    <span class="n">pfile_xdmf</span><span class="o">.</span><span class="n">write_function</span><span class="p">(</span><span class="n">p</span><span class="p">)</span>
</pre></div>
</div>
</section>
</section>
</section>


           </div>
          </div>
          <footer><div class="rst-footer-buttons" role="navigation" aria-label="Footer">
        <a href="demo_cahn-hilliard.html" class="btn btn-neutral float-left" title="Cahn-Hilliard equation" accesskey="p" rel="prev"><span class="fa fa-arrow-circle-left" aria-hidden="true"></span> Previous</a>
        <a href="demo_elasticity.html" class="btn btn-neutral float-right" title="Elasticity" accesskey="n" rel="next">Next <span class="fa fa-arrow-circle-right" aria-hidden="true"></span></a>
    </div>

  <hr/>

  <div role="contentinfo">
    <p>&#169; Copyright 2022, FEniCS Project.</p>
  </div>

  Built with <a href="https://www.sphinx-doc.org/">Sphinx</a> using a
    <a href="https://github.com/readthedocs/sphinx_rtd_theme">theme</a>
    provided by <a href="https://readthedocs.org">Read the Docs</a>.
   

</footer>
        </div>
      </div>
    </section>
  </div>
  <script>
      jQuery(function () {
          SphinxRtdTheme.Navigation.enable(true);
      });
  </script> 

</body>
</html>