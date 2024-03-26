import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className="container-fluid p-4">
      <div className='menuHeader'>
        <img src='/imgs/ux-ui.png' alt='logo' className='logo' />
      </div>
      <div className='titulo-header text-center'>
        <h1>
          <strong>DESCUBRE EL ARTE DE LA EXPERIENCIA DIGITAL</strong>
        </h1>
        <img src='https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%20947w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201247w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201547w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201847w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201894w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%202147w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%202447w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%202494w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%202747w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203047w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203094w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3347&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203347w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3647&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203647w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203694w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=3947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%203947w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=4247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%204247w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=4294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%204294w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=4547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%204547w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=4847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%204847w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=4894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%204894w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=5147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%205147w,%20https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=5377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%205377w' 
          alt='banner' className='banner' />
        <span>
          Bienvenido a mi portafolio donde la <br /> 
          creatividad se encuentra con la <br />
          funcionalidad
        </span>
      </div>
    </div>
  )
}
