Search.setIndex({docnames:["_autosummary/basix","_autosummary/basix.cell","_autosummary/basix.finite_element","_autosummary/basix.lattice","_autosummary/basix.numba_helpers","_autosummary/basix.quadrature","_autosummary/basix.variants","demo/demo_create_and_tabulate.py","demo/demo_custom_element.py","demo/demo_dof_transformations.py","demo/demo_facet_integral.py","demo/demo_lagrange_variants.py","demo/demo_quadrature.py","demo/index","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["_autosummary/basix.rst","_autosummary/basix.cell.rst","_autosummary/basix.finite_element.rst","_autosummary/basix.lattice.rst","_autosummary/basix.numba_helpers.rst","_autosummary/basix.quadrature.rst","_autosummary/basix.variants.rst","demo/demo_create_and_tabulate.py.rst","demo/demo_custom_element.py.rst","demo/demo_dof_transformations.py.rst","demo/demo_facet_integral.py.rst","demo/demo_lagrange_variants.py.rst","demo/demo_quadrature.py.rst","demo/index.rst","index.rst"],objects:{"":[[0,0,0,"-","basix"]],"basix.CellType":[[0,2,1,"","hexahedron"],[0,2,1,"","interval"],[0,3,1,"","name"],[0,2,1,"","point"],[0,2,1,"","prism"],[0,2,1,"","pyramid"],[0,2,1,"","quadrilateral"],[0,2,1,"","tetrahedron"],[0,2,1,"","triangle"],[0,3,1,"","value"]],"basix.DPCVariant":[[0,2,1,"","diagonal_equispaced"],[0,2,1,"","diagonal_gll"],[0,2,1,"","horizontal_equispaced"],[0,2,1,"","horizontal_gll"],[0,2,1,"","legendre"],[0,3,1,"","name"],[0,2,1,"","simplex_equispaced"],[0,2,1,"","simplex_gll"],[0,2,1,"","unset"],[0,3,1,"","value"]],"basix.ElementFamily":[[0,2,1,"","BDM"],[0,2,1,"","CR"],[0,2,1,"","DPC"],[0,2,1,"","N1E"],[0,2,1,"","N2E"],[0,2,1,"","P"],[0,2,1,"","RT"],[0,2,1,"","Regge"],[0,2,1,"","bubble"],[0,3,1,"","name"],[0,2,1,"","serendipity"],[0,3,1,"","value"]],"basix.LagrangeVariant":[[0,2,1,"","chebyshev_centroid"],[0,2,1,"","chebyshev_isaac"],[0,2,1,"","chebyshev_warped"],[0,2,1,"","equispaced"],[0,2,1,"","gl_centroid"],[0,2,1,"","gl_isaac"],[0,2,1,"","gl_warped"],[0,2,1,"","gll_centroid"],[0,2,1,"","gll_isaac"],[0,2,1,"","gll_warped"],[0,2,1,"","legendre"],[0,3,1,"","name"],[0,2,1,"","unset"],[0,3,1,"","value"],[0,2,1,"","vtk"]],"basix.LatticeSimplexMethod":[[0,2,1,"","centroid"],[0,2,1,"","isaac"],[0,3,1,"","name"],[0,2,1,"","none"],[0,3,1,"","value"],[0,2,1,"","warp"]],"basix.LatticeType":[[0,2,1,"","chebyshev"],[0,2,1,"","equispaced"],[0,2,1,"","gl"],[0,2,1,"","gll"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.MapType":[[0,2,1,"","contravariantPiola"],[0,2,1,"","covariantPiola"],[0,2,1,"","doubleContravariantPiola"],[0,2,1,"","doubleCovariantPiola"],[0,2,1,"","identity"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.PolynomialType":[[0,2,1,"","legendre"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.QuadratureType":[[0,2,1,"","Default"],[0,2,1,"","gauss_jacobi"],[0,2,1,"","gll"],[0,3,1,"","name"],[0,3,1,"","value"],[0,2,1,"","xiao_gimbutas"]],"basix.cell":[[1,4,1,"","facet_jacobians"],[1,4,1,"","facet_normals"],[1,4,1,"","facet_orientations"],[1,4,1,"","facet_outward_normals"],[1,4,1,"","facet_reference_volumes"],[1,4,1,"","string_to_type"],[1,4,1,"","sub_entity_connectivity"],[1,4,1,"","type_to_string"],[1,4,1,"","volume"]],"basix.finite_element":[[2,1,1,"","FiniteElement"],[2,4,1,"","string_to_family"]],"basix.finite_element.FiniteElement":[[2,5,1,"","apply_dof_transformation"],[2,5,1,"","apply_dof_transformation_to_transpose"],[2,5,1,"","apply_inverse_transpose_dof_transformation"],[2,5,1,"","base_transformations"],[2,3,1,"","cell_type"],[2,3,1,"","coefficient_matrix"],[2,3,1,"","degree"],[2,3,1,"","degree_bounds"],[2,3,1,"","dim"],[2,3,1,"","dof_transformations_are_identity"],[2,3,1,"","dof_transformations_are_permutations"],[2,3,1,"","dpc_variant"],[2,3,1,"","dual_matrix"],[2,3,1,"","entity_closure_dofs"],[2,3,1,"","entity_dofs"],[2,5,1,"","entity_transformations"],[2,3,1,"","family"],[2,5,1,"","get_tensor_product_representation"],[2,3,1,"","has_tensor_product_factorisation"],[2,3,1,"","interpolation_is_identity"],[2,3,1,"","interpolation_matrix"],[2,3,1,"","lagrange_variant"],[2,3,1,"","map_type"],[2,3,1,"","num_entity_closure_dofs"],[2,3,1,"","num_entity_dofs"],[2,3,1,"","points"],[2,5,1,"","pull_back"],[2,5,1,"","push_forward"],[2,5,1,"","tabulate"],[2,3,1,"","value_shape"],[2,3,1,"","value_size"]],"basix.lattice":[[3,4,1,"","simplex_method_to_string"],[3,4,1,"","string_to_simplex_method"],[3,4,1,"","string_to_type"],[3,4,1,"","type_to_string"]],"basix.numba_helpers":[[4,1,1,"","List"],[4,4,1,"","apply_dof_transformation"],[4,4,1,"","apply_dof_transformation_hexahedron"],[4,4,1,"","apply_dof_transformation_interval"],[4,4,1,"","apply_dof_transformation_prism"],[4,4,1,"","apply_dof_transformation_pyramid"],[4,4,1,"","apply_dof_transformation_quadrilateral"],[4,4,1,"","apply_dof_transformation_tetrahedron"],[4,4,1,"","apply_dof_transformation_to_transpose"],[4,4,1,"","apply_dof_transformation_to_transpose_hexahedron"],[4,4,1,"","apply_dof_transformation_to_transpose_interval"],[4,4,1,"","apply_dof_transformation_to_transpose_prism"],[4,4,1,"","apply_dof_transformation_to_transpose_pyramid"],[4,4,1,"","apply_dof_transformation_to_transpose_quadrilateral"],[4,4,1,"","apply_dof_transformation_to_transpose_tetrahedron"],[4,4,1,"","apply_dof_transformation_to_transpose_triangle"],[4,4,1,"","apply_dof_transformation_triangle"]],"basix.numba_helpers.List":[[4,5,1,"","append"],[4,5,1,"","clear"],[4,5,1,"","copy"],[4,5,1,"","count"],[4,5,1,"","empty_list"],[4,5,1,"","extend"],[4,5,1,"","index"],[4,5,1,"","insert"],[4,5,1,"","pop"],[4,5,1,"","remove"],[4,5,1,"","reverse"],[4,5,1,"","sort"]],"basix.quadrature":[[5,4,1,"","string_to_type"],[5,4,1,"","type_to_string"]],"basix.variants":[[6,4,1,"","dpc_variant_to_string"],[6,4,1,"","lagrange_variant_to_string"],[6,4,1,"","string_to_dpc_variant"],[6,4,1,"","string_to_lagrange_variant"]],basix:[[0,1,1,"","CellType"],[0,1,1,"","DPCVariant"],[0,1,1,"","ElementFamily"],[0,1,1,"","LagrangeVariant"],[0,1,1,"","LatticeSimplexMethod"],[0,1,1,"","LatticeType"],[0,1,1,"","MapType"],[0,1,1,"","PolynomialType"],[0,1,1,"","QuadratureType"],[1,0,0,"-","cell"],[0,4,1,"","compute_interpolation_operator"],[0,4,1,"","create_custom_element"],[0,4,1,"","create_element"],[0,4,1,"","create_lattice"],[2,0,0,"-","finite_element"],[0,4,1,"","geometry"],[0,4,1,"","index"],[3,0,0,"-","lattice"],[0,4,1,"","make_quadrature"],[4,0,0,"-","numba_helpers"],[5,0,0,"-","quadrature"],[0,4,1,"","tabulate_polynomials"],[0,4,1,"","topology"],[6,0,0,"-","variants"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","property","Python property"],"4":["py","function","Python function"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:property","4":"py:function","5":"py:method"},terms:{"0":[0,1,2,4,7,8,9,10,11,12],"000010":9,"00238095238095":12,"002393509368731209":12,"00833333333333":12,"00833333333333334":12,"0b000010":9,"1":[0,2,7,9,10,11,12,14],"10":[0,2],"11901":9,"120":12,"15":11,"175":11,"180":11,"1d":0,"1p_i":8,"2":[0,2,7,8,10,12,14],"20":0,"2008":11,"2020":11,"2021":9,"2102":9,"25":7,"2d":[0,2,9],"2y":8,"3":[0,2,7,8,9,10,12],"3d":[0,2,9,10],"3y":12,"4":[0,2,7,8,9,10,12],"420":12,"5":[0,2,7,8,10,12,14],"50":11,"6":[0,2,7,8],"7":[0,2],"8":[0,2],"9":[0,2,7,8],"case":[0,9],"char":[7,9],"class":[0,2,4],"const":9,"default":[0,4,12],"do":8,"enum":[2,3,5,6],"final":8,"float":1,"function":[0,1,2,3,4,5,6,7,8,9,10,11,14],"import":[7,8,9,10,11,12],"int":[0,1,2,4,7,9,12],"n\u00e9d\u00e9lec":14,"new":4,"return":[0,1,2,3,4,5,6,7,9,12,14],"static":9,"throw":[0,2],"true":[8,9,11],"while":12,A:[0,4,8,11,12,14],As:[8,9,10,11,12],For:[0,2,4,7,8,9,11,12],IN:4,If:[0,8,9,12],In:[0,7,8,9,10,11,12],It:[2,9,14],Its:2,On:2,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,14],There:[0,8],These:[0,2,8,9,12],To:[8,9,10,11,12],_:[8,9],_basixcpp:[0,1,2,3,5,6],_sequenc:4,ab:[9,11],abc:4,abl:12,abov:8,adapt:7,add:8,adjac:10,adjust:9,again:12,all:[0,4,7,8,9,12],allclos:[8,9],alloc:4,along:[0,8],alongsid:14,also:[4,9,10],an:[0,1,2,4,8,9,10,11,12,13,14],ani:4,appear:2,append:[4,8],appli:[0,2,4,9],apply_dof_transform:[2,4,9],apply_dof_transformation_hexahedron:4,apply_dof_transformation_interv:4,apply_dof_transformation_pr:4,apply_dof_transformation_pyramid:4,apply_dof_transformation_quadrilater:4,apply_dof_transformation_tetrahedron:4,apply_dof_transformation_to_transpos:[2,4],apply_dof_transformation_to_transpose_hexahedron:4,apply_dof_transformation_to_transpose_interv:4,apply_dof_transformation_to_transpose_pr:4,apply_dof_transformation_to_transpose_pyramid:4,apply_dof_transformation_to_transpose_quadrilater:4,apply_dof_transformation_to_transpose_tetrahedron:4,apply_dof_transformation_to_transpose_triangl:4,apply_dof_transformation_triangl:4,apply_inverse_transpose_dof_transform:2,appropri:2,approx:[11,12],approxim:[11,12],ar:[0,1,2,4,7,8,9,10,11,12],arbitrari:[0,9],arg0:[0,1,2],arg1:[0,2],arg2:[0,2],arg3:[0,2],arg4:0,arg5:0,arg6:0,arg7:0,arg8:0,arg:[0,4],argc:[7,9],argument:[2,4,7,10],argv:[7,9],arrai:[0,1,4,7,8,9,10],arrang:2,arxiv:9,ask:7,assembl:9,assert:[7,8],associ:[0,1,8,9],attribut:9,auto:[7,9],axi:11,back:0,base:[0,2,4,9],base_transform:[2,9],basi:[0,2,7,8,9,10,11,14],basix:[7,8,9,10,11,12],bdm:0,been:12,befor:4,begin:[8,9,11],behav:11,better:11,between:[0,2],block:[0,9],block_siz:2,bool:[0,1,8,9,11],boolalpha:9,both:[0,9],bound:11,boundari:[0,11],box:4,bubbl:[0,14],built:8,c:[0,14],calcul:8,call:2,can:[0,2,7,8,9,10,11,12,14],cancel:0,cannot:9,cc:9,cell:[0,2,4,7,8,9,10,11,12],cell_facet_jacobian:1,cell_facet_norm:1,cell_facet_orient:1,cell_facet_outward_norm:1,cell_facet_reference_volum:1,cell_info:[2,4,9],cell_typ:[0,1,2,7,9],cell_volum:1,celltyp:[0,1,7,8,9,10,11,12],centroid:0,chang:4,chebyshev:0,chebyshev_centroid:0,chebyshev_isaac:0,chebyshev_warp:0,check:9,chose:10,chosen:0,ciarlet:8,classmethod:4,clear:4,code:[7,9,12],coeffici:[0,14],coefficient_matrix:2,collect:4,column:10,combin:[8,9],common:2,compar:8,compil:4,complet:0,compon:[0,2],componenet:10,compress:0,comput:[0,2,7,8,11,12,13,14],compute_interpolation_oper:0,confirm:[8,9],connect:[1,10],connected_dim:1,connected_entity_n0:1,connected_entity_n1:1,consid:11,constant:11,construct:9,constructor:4,contain:[0,2,8],continu:0,contrast:8,contravariantpiola:[0,8],control:12,convert:[1,3,5,6],coordin:[8,10],copi:[0,4],core:[0,4],correct:[9,12],correctli:8,could:9,count:[4,10,12],cout:[7,9],covariantpiola:0,cover:0,cr:0,creat:[0,2,4,9,10,11,13,14],create_custom_el:[0,8],create_el:[0,7,8,9,10,11,12,14],create_lattic:[0,8,9,11],critic:2,cross:10,custom:[0,4,13,14],d2n:0,d:[0,8,12],data:[2,4,7,8,9,10],decim:12,def:12,defin:[0,8,10,11,12],definit:[0,8,14],degre:[0,2,7,10,11,12,14],degree_bound:2,demo:[8,10,11,12,14],demonstr:9,deriv:[0,2,7,10],describ:[8,9,11],design:2,detail:9,determin:2,detj:2,diagon:2,diagonal_equispac:0,diagonal_gl:0,dict:[2,4],dictionari:9,differ:[0,9],dim:[0,1,2,7,9],dimens:[0,1,2,4,7,8,9,10],direct:[0,8,9,11],directli:9,disagre:9,discontinu:[0,8,11],discuss:9,doc:14,doe:[4,9],dof:[0,2,4,7,8,11,13,14],dof_transformations_are_ident:[2,9],dof_transformations_are_permut:[2,9],dokken:9,dolfinx:[4,14],dot:[8,9],doubl:[7,9],doublecontravariantpiola:0,doublecovariantpiola:0,dpc:[0,6],dpc_variant:2,dpc_variant_to_str:6,dpcvariant:[0,6],dual_matrix:2,dvariant:0,dx2:0,e:[0,2],each:[0,1,2,4,7,8,9,11],easier:9,edg:[0,2,4,7,8,9,11],edge_count:4,edge_cout:4,edge_num:9,effect:[2,9],effici:9,element:[0,2,4,13,14],element_from:0,element_to:0,elementfamili:[0,2,7,8,9,10,11,12],empti:[4,8],empty_list:4,end:[4,9],endl:9,entiti:[0,1,2,4,8,9,10],entity__transform:9,entity_closure_dof:2,entity_dof:[2,4,9],entity_n:1,entity_transform:[2,4,9],entri:[8,9,10],equal:[7,8,9,11,12],equispac:[0,7,8,9,10,11,12],error:[0,2],estim:11,evalu:[0,8,11],even:11,everi:[10,12],exact:[8,12],exactli:[0,10,12],exampl:[2,7,8,9,10,11,12],except:9,exhibit:11,exist:2,expans:0,expect:[11,12],explicitli:11,extend:4,exterior:0,extern:0,extra:7,f:[8,12],face:[2,4,9],face_count:4,face_typ:4,facet:[1,13,14],facet_jacobian:[1,10],facet_norm:1,facet_orient:1,facet_outward_norm:[1,10],facet_reference_volum:1,factoris:2,fals:[0,4,8,9],famili:[0,2,7,9],featur:12,fenicsx:14,ffcx:14,fifth:10,find:[0,2,9],finit:[0,2,7,8,9,11,14],finite_el:[0,14],finiteel:[0,2,7,9,14],first:[2,4,7,8,9,10,12],float64:[0,1,2,4],fn:2,follow:[2,7,8,9,11,12],forc:12,form:[1,9],forward:0,four:[8,9,11],fourth:[2,7],free:11,freedom:[0,7,8,9,10,11],from:[0,2,4,7,8,9,10,11,12],g:[0,12],galerkin:11,gauss:[0,11,12],gauss_jacobi:[0,12],gdim:0,gener:[0,4,9],geometr:[0,2],geometri:[0,1,10],get:[1,2,7,9,10,12],get_tensor_product_represent:2,give:[2,4,9],given:[0,2],gl:0,gl_centroid:0,gl_isaac:0,gl_warp:0,gll2:11,gll:[0,11],gll_centroid:0,gll_isaac:[0,11],gll_warp:[0,11],global:9,greater:[0,7],grid:0,group:2,h:[7,9],ha:[0,2,4,7,8,9,12],had:7,hand:12,has_tensor_product_factoris:2,have:[0,8,10,11],helper:4,hesthaven:11,hexahedra:14,hexahedron:[0,4,9],high:[1,9,11],higher:[2,7],highest:[0,8,12],highest_complete_degre:0,horizont:2,horizontal_equispac:0,horizontal_gl:0,how:[7,8,9,10,11,12],hpp:[7,9],http:9,i:[2,4,8],ident:[0,8,9],idx:[0,2],ie:[0,12],implement:4,includ:[0,2,7,8,9,10,11],incorrectli:9,index:[0,2,4,9,10],indexerror:4,indic:[0,1,2,8,10,11,12],info:[2,9],inform:[1,10],inplac:4,input:[7,8,11,12],insert:4,instanc:0,instead:9,int32:4,int_0:8,integ:[2,4],integr:[0,2,8,13,14],integrand:[8,10],interfac:[0,4,7,9],interior:[0,7,8],intern:4,interpol:[0,11,14],interpolation_is_ident:2,interpolation_matrix:2,interv:[0,2,4,8,9,14],intial:4,invers:2,inward:2,iomanip:9,isaac:[0,11],issu:9,item:[4,9],item_typ:4,iter:4,its:[2,7,9,11,12],j:2,j_i:2,j_j:2,jacobi:12,jacobian:[1,2,10],k:[2,7],k_i:2,k_j:2,kei:4,kernel:4,keyword:4,kind:[2,9],know:9,kth:0,kwarg:[0,4],l:[2,11],lagrang:[0,2,6,7,10,12,13,14],lagrange_degree_2:9,lagrange_vari:[2,7,9],lagrange_variant_to_str:6,lagrangevari:[0,6,7,9,10,11,12],lambda:11,larg:[9,11],largest:8,last:4,lattic:[0,7,9,11],latticesimplexmethod:[0,3],latticetyp:[0,3,8,9,11],lead:11,lebesgu:11,left:[8,9,11],legendr:[0,8,11],len:8,length:2,librari:[0,14],like:2,linalg:10,list:[0,1,2,4,8],listtyp:4,lobatto:[0,11],local:9,look:[10,11],loop:9,low:1,lower:11,lsttype:4,lvariant:0,ly:0,m:[0,8],machin:12,made:9,mai:9,main:[7,9],major:0,make:[0,9,11],make_quadratur:[0,8,10,12],make_quadrautr:12,manipul:[1,3,5,6],map:[0,2,8,9,10,11],map_typ:[0,2],mapped_point:10,maptyp:[0,8],match:9,math:9,mathrm:[8,12],matric:[0,2,8,9],matrix:[0,2,8,9],max:11,max_:11,maximum:0,mean:9,member:0,meminfo:4,mesh:9,method:[0,3,9,11],midpoint:8,mod_data:9,modul:0,more:9,much:11,multipl:[0,2,8],multipli:[8,10],must:[0,7,8,9,10],mutablesequ:4,n1e:[0,9],n2e:0,n:[0,7,8,9,11,12],name:[0,1],nbase:9,nd:2,ndarrai:[0,1,2,4],ndegre:9,nedelec:[2,9],need:[0,8,9],neighbour:9,nentiti:9,next:[7,8,10,12],nodal:11,node:11,none:[0,4],norm:10,normal:[1,2,8,10],normal_deriv:10,note:[0,2,10,12],now:[7,8,10,12],np:[4,7,8,9,10,11,12],ntabul:7,num:0,num_entity_closure_dof:2,num_entity_dof:2,num_point:9,numba:4,number:[0,1,2,4,7,8,9,10,11],numpi:[0,1,2,7,8,9,10,11,12],object:[4,14],observ:11,obtain:[11,12],occurr:4,often:9,omit:0,onc:12,one:[2,8,9],onli:[0,2,4,7,10],onto:11,oper:0,option:[0,4],order:[0,1,2,8,9,10,12],org:9,orient:[1,2,4,9],original_data:9,orthogon:8,orthonorm:8,other:[0,8,12],our:[8,9,10,11,12],out:[0,2,4,9],outer:0,output:1,outward:[1,2],over:[2,9,10,12],overload:0,p:[0,7,8,9,10,11,12],p_0:12,p_:12,p_i:[8,12],paramet:[0,1,2,3,4,5,6,11],part:14,pass:[4,7,10,11,12],peak:11,per:[2,8],perform:2,permut:[2,13,14],phenomenon:11,phi_0:11,phi_:11,phi_i:11,physic:[2,9],place:[4,7,8,11,12],plu:8,point:[0,1,2,7,8,9,10,11,12],point_index:0,poli:8,polygon:9,polyhedr:9,polynomi:[0,12,14],polynomialtyp:[0,8],polytyp:0,pop:4,possibl:8,pp:11,pre:4,precis:12,prefer:2,present:4,previou:8,print:[7,8,9,10,11,12],prism:[0,4,9,14],product:[2,8,10],properti:[0,2],propos:11,provid:[7,8,9],pt:8,pull:0,pull_back:2,push:0,push_forward:2,put:[8,9],pybind11_builtin:[0,2],pybind11_object:[0,2],pyramid:[0,9,14],python:[0,12],q:0,quadrat:8,quadratur:[0,8,10,13,14],quadraturerul:5,quadraturetyp:[0,5,12],quadrilater:[0,4,7,8,9,14],quartic:12,quit:9,r:[0,11],rais:4,rang:[4,8,9],ravairt:14,raviart:[2,8],recommend:4,recurs:11,refer:[0,1,2,9,10,11],reflect:[2,9],regg:0,regular:0,relev:9,remov:4,repeat:2,repres:[0,2,4,8],represent:[2,8],respect:12,result:[0,7,10,12],revers:[2,4,9],richardon:9,right:[8,9,11],rotat:[2,9],row:[2,8],rt:[0,8],rule:[0,5,8,10,13,14],run:[7,9],rung:11,runtim:[0,2,14],s:[0,4,7,9,11],same:[0,7,8,9],scalar:[2,8],scrogg:9,second:[2,7,8,9],see:[4,7,8,9,10],self:[0,2],sequenc:4,serendip:0,set:[0,2,7,8,11,12],shape:[0,2,4,7,8,9],share:2,should:[2,11],show:[2,7,9,12],simpler:9,simplex:3,simplex_equispac:0,simplex_gl:0,simplex_method:[0,3],simplex_method_to_str:3,simplic:[0,11],singl:8,size:[0,2,7,8,9,10],size_jacobian:10,small:9,smaller:11,so:[2,7,8,9,10,11,12],some:[2,4],sort:4,space:[0,2,4,7,8,10,11,12],span:[0,8,9],start:[4,10,11,12],std:[7,9],stop:4,store:2,str:[1,2,3,5,6],string:[1,2,3,4,5,6,9],string_to_dpc_vari:6,string_to_famili:2,string_to_lagrange_vari:6,string_to_simplex_method:3,string_to_typ:[1,3,5],sub:[9,10],sub_entity_connect:[1,10],subblock:2,subent:[1,2,4],subset:11,subspac:0,sum:[8,10,11,12],sum_:8,sum_i:[11,12],support:4,surfac:0,swap:2,t:4,tab:[7,10,11],tabul:[0,2,8,9,10,11,12,13,14],tabulate_polynomi:[0,8],take:[4,10,11,12],tangent:2,tdim:[0,1,4],tell:9,tensor:2,term:8,tetrahedr:[0,2,10],tetrahedra:14,tetrahedron:[0,2,4,9,10],than:[0,7,11],thei:[0,9],them:0,therefor:[8,12],thi:[0,1,2,4,7,8,9,10,11,12,14],third:[2,7,12],thoma:[2,14],three:[10,12],too:7,topolog:[0,1,4],transform:[0,2,4,13,14],transpos:[2,4],triangl:[0,2,4,8,9,10,11,12,14],triangular:[0,2,10],trivial:0,tupl:[0,2],two:[0,2,8,9,10,12],type:[0,1,2,3,4,5,6,7,8,9,11,12],type_to_nam:9,type_to_str:[1,3,5],typedlist:4,u:2,ufl:14,unset:0,up:2,us:[0,1,2,4,7,8,9,10,11,13],usabl:4,user:4,valu:[0,2,4,7,8,9,10,11,12],value_s:2,value_shap:[0,2],valueerror:4,variant:[0,7,9,13,14],vector:[0,1,2,7,9,10],verifi:9,version:[0,2],vertex:[0,1,7,8],vertic:[2,10],via:[0,9],view:7,volum:1,vs:0,vtk:0,w_0:12,w_:12,w_if:12,wai:[8,11],want:[8,10,12],warburton:11,warp:[0,11],wcoeff:[0,8],we:[7,8,9,10,11,12],weight:[0,8,10,12],welcom:14,well:[9,11],what:8,when:[0,4,8,9,11],where:[2,9,11],whether:[0,1,8,11],which:[0,2,9,10],within:12,withing:12,work:9,would:[7,12],write:4,written:0,wrong:9,wt:8,x:[0,2,8,10,11,12],xiao_gimbuta:0,xio:[7,9],xt:[7,9],xtensor:[7,9],xtl:9,xy:8,y:[0,2,8,10,12],you:8,z:0,zero:8,zeroth:10},titles:["basix","basix.cell","basix.finite_element","basix.lattice","basix.numba_helpers","basix.quadrature","basix.variants","Creating and tabulating an element","Creating a custom element","DOF permutations and transformations","Computing a facet integral","Variants of Lagrange elements","Creating and using a quadrature rule","Demos","Basix Python interface documentation"],titleterms:{"1":8,"2":9,"5":9,"function":12,"n\u00e9d\u00e9lec":9,an:7,basi:12,basix:[0,1,2,3,4,5,6,14],bubbl:8,c:[7,9],cell:1,coeffici:8,comput:10,content:14,creat:[7,8,12],custom:8,degre:[8,9],demo:[7,9,13],document:14,dof:9,element:[7,8,9,11],facet:10,finite_el:2,integr:[10,12],interfac:14,interpol:8,lagrang:[8,9,11],lattic:3,numba_help:4,permut:9,polynomi:8,python:14,quadratur:[5,12],ravairt:8,rule:12,tabl:14,tabul:7,thoma:8,transform:9,us:[12,14],variant:[6,11]}})