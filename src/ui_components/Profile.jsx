
import React, { useMemo, useState } from 'react'
import {
  FaUser,
  FaBuilding,
  FaBriefcase,
  FaUsers,
  FaCode,
  FaGraduationCap,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEdit,
  FaPlus,
  FaEye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaEllipsisH,
  FaChartLine,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaArrowUp,
  FaExternalLinkAlt,
  FaTimes,
  FaSave,
  FaEnvelope,
  FaPhone,
  FaFilter,
  FaUserCheck,
  FaTrash,
  FaChevronDown,
  FaStar,
  FaUpload,
  FaShareAlt,
  FaLaptopCode,
  FaUserTie,
  FaAward
} from 'react-icons/fa'

function Profile() {
  // --------------------------------
  // USER AND ROLE STATE
  // --------------------------------

  const [activeRole, setActiveRole] = useState('developer')
  const [activeSection, setActiveSection] = useState('overview')
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showAddProject, setShowAddProject] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [search, setSearch] = useState('')
  const [applicantFilter, setApplicantFilter] = useState('All')
  const [editingOpportunity, setEditingOpportunity] = useState(null)

  // --------------------------------
  // DEVELOPER PROFILE
  // --------------------------------

  const [developer, setDeveloper] = useState({
    name: 'Simon Njuguna',
    username: 'simonmuchuku',
    title: 'Full Stack Developer',
    location: 'Nairobi, Kenya',
    email: 'simon@example.com',
    bio: 'Computer Science graduate passionate about building practical software solutions. I enjoy working with modern web technologies, developing APIs and creating useful digital products.',
    website: 'https://portfolio2-ebon-five-86.vercel.app',
    github: 'https://github.com/Torusic',
    linkedin: '',
    availability: 'Open to opportunities',
    education: 'BSc Computer Science',
    university: "St. Paul's University"
  })

  const [skills, setSkills] = useState([
    'JavaScript',
    'React',
    'Python',
    'Django REST Framework',
    'PostgreSQL',
    'MongoDB',
    'Node.js',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'Git',
    'REST APIs'
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Smart Rent & Utility',
      description: 'A platform for managing rental payments and utility services.',
      technologies: ['React', 'Django', 'ESP32'],
      link: '',
      github: '',
      featured: true
    },
    {
      id: 2,
      name: 'E-commerce Platform',
      description: 'An online shopping platform with product management and API integration.',
      technologies: ['React', 'DRF', 'PostgreSQL'],
      link: '',
      github: '',
      featured: false
    },
    {
      id: 3,
      name: 'Smart Queue System',
      description: 'A digital queue management solution designed to improve service delivery.',
      technologies: ['React', 'Python', 'PostgreSQL'],
      link: '',
      github: '',
      featured: false
    }
  ])

  const [experience] = useState([
    {
      id: 1,
      position: 'ICT Support Attachment',
      company: 'KALRO',
      period: 'January 2026 – April 2026',
      description: 'Technical support, hardware and software troubleshooting, networking and data-centre monitoring.'
    }
  ])

  // --------------------------------
  // EMPLOYER PROFILE
  // --------------------------------

  const [company, setCompany] = useState({
    name: 'TechNova Solutions',
    industry: 'Software & Technology',
    location: 'Nairobi, Kenya',
    website: 'https://example.com',
    email: 'careers@example.com',
    phone: '+254 700 000 000',
    description: 'Building innovative digital products and connecting businesses with technology talent.',
    size: '11–50 employees'
  })

  const [opportunities, setOpportunities] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Nairobi',
      applicants: 24,
      views: 340,
      status: 'Active',
      date: '3 days ago'
    },
    {
      id: 2,
      title: 'Software Engineering Intern',
      type: 'Internship',
      location: 'Remote',
      applicants: 18,
      views: 215,
      status: 'Active',
      date: '1 week ago'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      type: 'Contract',
      location: 'Nairobi',
      applicants: 44,
      views: 510,
      status: 'Closed',
      date: '2 weeks ago'
    },
    {
      id: 4,
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Hybrid',
      applicants: 0,
      views: 90,
      status: 'Draft',
      date: 'Yesterday'
    }
  ])

  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: 'Mary Wanjiku',
      role: 'Frontend Developer',
      email: 'mary@example.com',
      skills: ['React', 'JavaScript', 'CSS'],
      date: 'Today',
      status: 'Pending'
    },
    {
      id: 2,
      name: 'Brian Kamau',
      role: 'Software Engineering Intern',
      email: 'brian@example.com',
      skills: ['Python', 'Django', 'SQL'],
      date: 'Yesterday',
      status: 'Shortlisted'
    },
    {
      id: 3,
      name: 'Faith Njeri',
      role: 'Frontend Developer',
      email: 'faith@example.com',
      skills: ['React', 'Tailwind', 'Node.js'],
      date: '2 days ago',
      status: 'Reviewed'
    },
    {
      id: 4,
      name: 'Kevin Otieno',
      role: 'UI/UX Designer',
      email: 'kevin@example.com',
      skills: ['Figma', 'UI Design'],
      date: '3 days ago',
      status: 'Rejected'
    }
  ])

  // --------------------------------
  // NAVIGATION
  // --------------------------------

  const developerNavigation = [
    { id: 'overview', label: 'Overview', icon: FaUser },
    { id: 'projects', label: 'Projects', icon: FaFolderOpen },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'education', label: 'Education', icon: FaGraduationCap }
  ]

  const employerNavigation = [
    { id: 'overview', label: 'Dashboard', icon: FaChartLine },
    { id: 'opportunities', label: 'My Opportunities', icon: FaBriefcase },
    { id: 'applicants', label: 'Applicants', icon: FaUsers },
    { id: 'company', label: 'Company Profile', icon: FaBuilding }
  ]

  const navigation =
    activeRole === 'developer'
      ? developerNavigation
      : employerNavigation

  const changeRole = (role) => {
    setActiveRole(role)
    setActiveSection('overview')
    setMobileMenu(false)
  }

  // --------------------------------
  // FILTERING
  // --------------------------------

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  }, [opportunities, search])

  const filteredApplicants = useMemo(() => {
    return applicants.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        applicantFilter === 'All' || item.status === applicantFilter

      return matchesSearch && matchesStatus
    })
  }, [applicants, search, applicantFilter])

  // --------------------------------
  // PROFILE ACTIONS
  // --------------------------------

  const updateDeveloper = (e) => {
    e.preventDefault()
    setShowEditProfile(false)
  }

  const updateApplicantStatus = (id, status) => {
    setApplicants(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status } : item
      )
    )
  }

  const updateOpportunityStatus = (id, status) => {
    setOpportunities(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status } : item
      )
    )
  }

  const deleteOpportunity = (id) => {
    setOpportunities(prev => prev.filter(item => item.id !== id))
  }

  const addProject = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    const newProject = {
      id: Date.now(),
      name: form.get('name'),
      description: form.get('description'),
      technologies: form.get('technologies')
        .split(',')
        .map(item => item.trim())
        .filter(Boolean),
      link: form.get('link'),
      github: form.get('github'),
      featured: false
    }

    setProjects(prev => [newProject, ...prev])
    setShowAddProject(false)
  }

  const shareProfile = async () => {
    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Devfolio Profile',
          url
        })
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error(error)
        }
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url)
      alert('Profile link copied!')
    }
  }

  // --------------------------------
  // REUSABLE UI
  // --------------------------------

  const StatCard = ({ title, value, icon: Icon, subtitle }) => (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Icon />
        </div>
        <FaArrowUp className="text-xs text-emerald-500" />
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-800">
        {value}
      </h3>

      <p className="mt-1 text-sm font-medium text-slate-600">
        {title}
      </p>

      {subtitle && (
        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      )}
    </div>
  )

  const SectionHeading = ({ title, description, action }) => (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        <p className="mt-1 text-xs text-slate-500">{description}</p>
      </div>

      {action}
    </div>
  )

  const StatusBadge = ({ status }) => {
    const styles = {
      Active: 'bg-emerald-50 text-emerald-700',
      Closed: 'bg-slate-100 text-slate-600',
      Draft: 'bg-amber-50 text-amber-700',
      Pending: 'bg-amber-50 text-amber-700',
      Shortlisted: 'bg-indigo-50 text-indigo-700',
      Reviewed: 'bg-blue-50 text-blue-700',
      Rejected: 'bg-red-50 text-red-700'
    }

    return (
      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${styles[status] || 'bg-slate-100 text-slate-600'}`}>
        {status}
      </span>
    )
  }

  // --------------------------------
  // DEVELOPER OVERVIEW
  // --------------------------------

  const DeveloperOverview = () => (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard title="Projects" value={projects.length} icon={FaFolderOpen} />
        <StatCard title="Skills" value={skills.length} icon={FaCode} />
        <StatCard title="Experience" value="1" icon={FaBriefcase} />
        <StatCard title="Profile views" value="128" icon={FaEye} />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <SectionHeading
          title="About Me"
          description="A little introduction about myself."
          action={
            <button
              onClick={() => setShowEditProfile(true)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <FaEdit /> Edit
            </button>
          }
        />

        <p className="text-sm leading-7 text-slate-600">
          {developer.bio}
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <SectionHeading
          title="Featured Projects"
          description="Some of the projects I have been working on."
          action={
            <button
              onClick={() => {
                setActiveSection('projects')
                setShowAddProject(true)
              }}
              className="flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <FaPlus /> Add Project
            </button>
          }
        />

        <div className="grid gap-4 md:grid-cols-2">
          {projects.filter(project => project.featured).map(project => (
            <div key={project.id} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <FaLaptopCode />
                </div>
                <FaEllipsisH className="text-slate-400" />
              </div>

              <h3 className="mt-4 font-semibold text-slate-800">
                {project.name}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map(technology => (
                  <span key={technology} className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {projects.filter(project => project.featured).length === 0 && (
          <p className="text-sm text-slate-400">No featured projects yet.</p>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <SectionHeading
          title="Top Skills"
          description="Technologies and tools I work with."
          action={
            <button
              onClick={() => setActiveSection('skills')}
              className="text-xs font-semibold text-indigo-600"
            >
              View all
            </button>
          }
        />

        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 8).map(skill => (
            <span key={skill} className="rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  )

  // --------------------------------
  // EMPLOYER DASHBOARD
  // --------------------------------

  const EmployerDashboard = () => (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard
          title="Opportunities"
          value={opportunities.length}
          icon={FaBriefcase}
          subtitle="Total listings"
        />

        <StatCard
          title="Applications"
          value={applicants.length + 82}
          icon={FaUsers}
          subtitle="Across all listings"
        />

        <StatCard
          title="Shortlisted"
          value={applicants.filter(a => a.status === 'Shortlisted').length}
          icon={FaUserCheck}
          subtitle="Candidates selected"
        />

        <StatCard
          title="Active listings"
          value={opportunities.filter(o => o.status === 'Active').length}
          icon={FaChartLine}
          subtitle="Currently published"
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-3">

        <div className="rounded-xl border border-slate-200 bg-white p-5 xl:col-span-2">
          <SectionHeading
            title="Recent Opportunities"
            description="Monitor your latest job and internship listings."
            action={
              <button
                onClick={() => setActiveSection('opportunities')}
                className="text-xs font-semibold text-indigo-600"
              >
                View all
              </button>
            }
          />

          <div className="space-y-4">
            {opportunities.slice(0, 3).map(item => (
              <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.type} · {item.location}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {item.applicants} applicants · {item.date}
                  </p>
                </div>

                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <SectionHeading
            title="Quick Actions"
            description="Manage your recruitment."
          />

          <div className="space-y-2">
            <button
              onClick={() => setActiveSection('opportunities')}
              className="flex w-full items-center gap-3 rounded-lg bg-indigo-600 p-3 text-left text-white hover:bg-indigo-700"
            >
              <FaPlus />
              <span className="text-xs font-semibold">Post Opportunity</span>
            </button>

            <button
              onClick={() => setActiveSection('applicants')}
              className="flex w-full items-center gap-3 rounded-lg border border-slate-200 p-3 text-left text-slate-700 hover:bg-slate-50"
            >
              <FaUsers className="text-indigo-600" />
              <span className="text-xs font-semibold">Manage Applicants</span>
            </button>

            <button
              onClick={() => setActiveSection('company')}
              className="flex w-full items-center gap-3 rounded-lg border border-slate-200 p-3 text-left text-slate-700 hover:bg-slate-50"
            >
              <FaBuilding className="text-indigo-600" />
              <span className="text-xs font-semibold">Company Profile</span>
            </button>
          </div>
        </div>

      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <SectionHeading
          title="Recent Applicants"
          description="Candidates who recently applied to your opportunities."
          action={
            <button
              onClick={() => setActiveSection('applicants')}
              className="text-xs font-semibold text-indigo-600"
            >
              Manage all
            </button>
          }
        />

        <div className="space-y-3">
          {applicants.slice(0, 3).map(applicant => (
            <div key={applicant.id} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                {applicant.name.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-xs font-semibold text-slate-800">
                  {applicant.name}
                </h4>
                <p className="truncate text-xs text-slate-500">
                  {applicant.role}
                </p>
              </div>

              <StatusBadge status={applicant.status} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )

  // --------------------------------
  // OPPORTUNITIES
  // --------------------------------

  const OpportunitiesSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <SectionHeading
        title="My Opportunities"
        description="Manage your published and draft opportunities."
        action={
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700">
            <FaPlus /> Create New
          </button>
        }
      />

      <div className="relative mb-5">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search opportunities..."
          className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-400"
        />
      </div>

      <div className="space-y-3">
        {filteredOpportunities.map(item => (
          <div key={item.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {item.type} · {item.location}
                </p>
              </div>

              <StatusBadge status={item.status} />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-4 text-xs text-slate-500">
                <span><FaUsers className="mr-1 inline" />{item.applicants} applicants</span>
                <span><FaEye className="mr-1 inline" />{item.views} views</span>
              </div>

              <div className="flex items-center gap-2">
                {item.status === 'Draft' && (
                  <button
                    onClick={() => updateOpportunityStatus(item.id, 'Active')}
                    className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700"
                  >
                    Publish
                  </button>
                )}

                {item.status === 'Active' && (
                  <button
                    onClick={() => updateOpportunityStatus(item.id, 'Closed')}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600"
                  >
                    Close
                  </button>
                )}

                <button
                  onClick={() => deleteOpportunity(item.id)}
                  className="rounded-lg border border-red-100 p-2 text-red-500 hover:bg-red-50"
                  title="Delete opportunity"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredOpportunities.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-400">
            No opportunities found.
          </p>
        )}
      </div>
    </div>
  )

  // --------------------------------
  // APPLICANTS
  // --------------------------------

  const ApplicantsSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <SectionHeading
        title="Applicants"
        description="Review candidates and manage application statuses."
      />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search candidates..."
            className="w-full rounded-lg border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-indigo-400"
          />
        </div>

        <select
          value={applicantFilter}
          onChange={e => setApplicantFilter(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Shortlisted</option>
          <option>Reviewed</option>
          <option>Rejected</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredApplicants.map(applicant => (
          <div key={applicant.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                {applicant.name.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {applicant.name}
                  </h3>
                  <StatusBadge status={applicant.status} />
                </div>

                <p className="mt-1 text-xs text-slate-500">{applicant.role}</p>
                <p className="mt-1 text-xs text-slate-400">{applicant.email} · {applicant.date}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {applicant.skills.map(skill => (
                    <span key={skill} className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50">
                    View Profile
                  </button>

                  <button
                    onClick={() => updateApplicantStatus(applicant.id, 'Shortlisted')}
                    className="rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                  >
                    Shortlist
                  </button>

                  <button
                    onClick={() => updateApplicantStatus(applicant.id, 'Rejected')}
                    className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredApplicants.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-400">
            No applicants found.
          </p>
        )}
      </div>
    </div>
  )

  // --------------------------------
  // COMPANY PROFILE
  // --------------------------------

  const CompanySection = () => (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <SectionHeading
          title="Company Information"
          description="Manage the information candidates see."
          action={
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">
              <FaEdit /> Edit
            </button>
          }
        />

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <FaBuilding size={28} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800">{company.name}</h3>
            <p className="mt-1 text-xs text-slate-500">{company.industry}</p>
            <p className="mt-1 text-xs text-slate-500">{company.location}</p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          {company.description}
        </p>

        <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2">
          <div>
            <p className="text-xs text-slate-400">Company size</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{company.size}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Website</p>
            <a href={company.website} target="_blank" rel="noreferrer" className="mt-1 block truncate text-sm font-medium text-indigo-600">
              {company.website}
            </a>
          </div>

          <div>
            <p className="text-xs text-slate-400">Contact email</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{company.email}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Phone</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{company.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )

  // --------------------------------
  // PROJECTS
  // --------------------------------

  const ProjectsSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <SectionHeading
        title="My Projects"
        description="Showcase the applications and solutions you have built."
        action={
          <button
            onClick={() => setShowAddProject(true)}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
          >
            <FaPlus /> Add Project
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(project => (
          <div key={project.id} className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <FaLaptopCode />
              </div>
              {project.featured && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-600">
                  <FaStar /> Featured
                </span>
              )}
            </div>

            <h3 className="mt-4 text-sm font-semibold text-slate-800">
              {project.name}
            </h3>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map(technology => (
                <span key={technology} className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] text-indigo-700">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 border-t border-slate-100 pt-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <FaGithub /> GitHub
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // --------------------------------
  // SKILLS
  // --------------------------------

  const SkillsSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <SectionHeading
        title="Skills & Technologies"
        description="The technologies and tools I use."
      />

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )

  // --------------------------------
  // EXPERIENCE
  // --------------------------------

  const ExperienceSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <SectionHeading
        title="Experience"
        description="Professional experience, internships and attachments."
      />

      <div className="space-y-5">
        {experience.map(item => (
          <div key={item.id} className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <FaBriefcase />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-800">{item.position}</h3>
              <p className="mt-1 text-xs text-slate-500">{item.company}</p>
              <p className="mt-1 text-xs text-slate-400">{item.period}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // --------------------------------
  // EDUCATION
  // --------------------------------

  const EducationSection = () => (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <SectionHeading
        title="Education"
        description="Your academic qualifications."
      />

      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <FaGraduationCap />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-800">{developer.education}</h3>
          <p className="mt-1 text-xs text-slate-500">{developer.university}</p>
          <p className="mt-1 text-xs text-slate-400">Graduated 2026</p>
        </div>
      </div>
    </div>
  )

  // --------------------------------
  // MAIN CONTENT ROUTER
  // --------------------------------

  const renderContent = () => {
    if (activeRole === 'developer') {
      switch (activeSection) {
        case 'projects':
          return <ProjectsSection />
        case 'skills':
          return <SkillsSection />
        case 'experience':
          return <ExperienceSection />
        case 'education':
          return <EducationSection />
        default:
          return <DeveloperOverview />
      }
    }

    switch (activeSection) {
      case 'opportunities':
        return <OpportunitiesSection />
      case 'applicants':
        return <ApplicantsSection />
      case 'company':
        return <CompanySection />
      default:
        return <EmployerDashboard />
    }
  }

  // --------------------------------
  // PAGE
  // --------------------------------

  return (
    <section className="min-h-screen rounded-2xl mb-20 bg-indigo-50/60 p-2 sm:p-4">

      <div className="mx-auto max-w-7xl space-y-5">

        {/* PAGE HEADER */}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold text-slate-800">
              My Profile
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Manage your professional identity and activities.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={shareProfile}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <FaShareAlt /> <span className="hidden sm:inline">Share</span>
            </button>

            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600"
              aria-label="Notifications"
            >
              <FaEnvelope />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>
        </div>

        {/* ROLE SWITCHER */}

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-2">
          <div className="flex gap-1">
            <button
              onClick={() => changeRole('developer')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${
                activeRole === 'developer'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <FaUser /> Personal Profile
            </button>

            <button
              onClick={() => changeRole('employer')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${
                activeRole === 'employer'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <FaBuilding /> Employer Workspace
            </button>
          </div>

          <span className="hidden text-xs text-slate-400 sm:block">
            Switch between your profiles
          </span>
        </div>

        {/* PROFILE HEADER */}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

          <div className="h-24 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-500 sm:h-32" />

          <div className="px-4 pb-5 sm:px-6">

            <div className="-mt-10 flex flex-wrap items-end justify-between gap-3">

              <div className={`flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white text-2xl font-bold shadow-sm ${
                activeRole === 'developer'
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-violet-100 text-violet-700'
              }`}>
                {activeRole === 'developer'
                  ? developer.name.split(' ').map(n => n[0]).slice(0, 2).join('')
                  : <FaBuilding />
                }
              </div>

              <div className="flex gap-2 pb-1">
                <button
                  onClick={() => setShowEditProfile(true)}
                  className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>

            </div>

            <div className="mt-3">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-slate-800">
                  {activeRole === 'developer' ? developer.name : company.name}
                </h2>

                <FaCheckCircle className="text-sm text-blue-500" />
              </div>

              <p className="mt-1 text-sm font-medium text-slate-600">
                {activeRole === 'developer'
                  ? developer.title
                  : company.industry
                }
              </p>

              <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                <FaMapMarkerAlt />
                {activeRole === 'developer'
                  ? developer.location
                  : company.location
                }
              </p>

              {activeRole === 'developer' ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold text-emerald-700">
                    {developer.availability}
                  </span>

                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={developer.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600"
                  >
                    <FaGlobe /> Portfolio
                  </a>
                </div>
              ) : (
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span>{company.size}</span>
                  <span>·</span>
                  <span>{company.email}</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* MAIN LAYOUT */}

        <div className="grid min-w-0 gap-5 lg:grid-cols-4">

          {/* SIDEBAR */}

          <aside className="space-y-4 lg:col-span-1">

            <div className="rounded-xl border border-slate-200 bg-white p-3">

              <div className="mb-3 flex items-center justify-between px-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {activeRole === 'developer' ? 'My Profile' : 'Recruitment'}
                </h3>
              </div>

              <nav className="space-y-1">
                {navigation.map(item => {
                  const Icon = item.icon

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id)
                        setSearch('')
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-xs font-semibold transition ${
                        activeSection === item.id
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      <Icon className="text-sm" />
                      {item.label}
                    </button>
                  )
                })}
              </nav>

            </div>

            {/* PROFILE COMPLETENESS */}

            {activeRole === 'developer' && (
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-700">
                    Profile strength
                  </h3>
                  <span className="text-xs font-bold text-indigo-600">80%</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-4/5 rounded-full bg-indigo-600" />
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500">
                  Complete your profile to improve your visibility to recruiters.
                </p>

                <button
                  onClick={() => setShowEditProfile(true)}
                  className="mt-3 text-xs font-semibold text-indigo-600"
                >
                  Complete profile →
                </button>
              </div>
            )}

            {activeRole === 'employer' && (
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-xs font-bold text-slate-700">
                  Company verification
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-xs font-medium text-slate-600">
                    Verification pending
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Complete company verification to build trust with candidates.
                </p>
              </div>
            )}

          </aside>

          {/* MAIN SECTION */}

          <main className="min-w-0 lg:col-span-3">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-base font-bold text-slate-800">
                  {navigation.find(item => item.id === activeSection)?.label}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  {activeRole === 'developer'
                    ? 'Your professional profile and portfolio.'
                    : 'Manage your recruitment activities.'
                  }
                </p>
              </div>
            </div>

            {renderContent()}
          </main>

        </div>

      </div>

      {/* EDIT PROFILE MODAL */}

      {showEditProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3">
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Edit {activeRole === 'developer' ? 'Profile' : 'Company'}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Update your information.
                </p>
              </div>

              <button
                onClick={() => setShowEditProfile(false)}
                className="rounded-lg bg-slate-100 p-2 text-slate-500"
              >
                <FaTimes />
              </button>
            </div>

            {activeRole === 'developer' ? (
              <form onSubmit={updateDeveloper} className="space-y-4">

                {[
                  ['name', 'Full Name'],
                  ['title', 'Professional Title'],
                  ['location', 'Location'],
                  ['email', 'Email'],
                  ['website', 'Portfolio URL'],
                  ['github', 'GitHub URL'],
                  ['linkedin', 'LinkedIn URL']
                ].map(([key, label]) => (
                  <div key={key}>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      {label}
                    </label>

                    <input
                      value={developer[key]}
                      onChange={e => setDeveloper(prev => ({
                        ...prev,
                        [key]: e.target.value
                      }))}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                    About Me
                  </label>

                  <textarea
                    rows="4"
                    value={developer.bio}
                    onChange={e => setDeveloper(prev => ({
                      ...prev,
                      bio: e.target.value
                    }))}
                    className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                    Availability
                  </label>

                  <select
                    value={developer.availability}
                    onChange={e => setDeveloper(prev => ({
                      ...prev,
                      availability: e.target.value
                    }))}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none"
                  >
                    <option>Open to opportunities</option>
                    <option>Available for freelance</option>
                    <option>Open to internships</option>
                    <option>Not currently available</option>
                  </select>
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditProfile(false)}
                    className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white"
                  >
                    <FaSave /> Save Changes
                  </button>
                </div>

              </form>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault()
                  setShowEditProfile(false)
                }}
                className="space-y-4"
              >
                {[
                  ['name', 'Company Name'],
                  ['industry', 'Industry'],
                  ['location', 'Location'],
                  ['website', 'Website'],
                  ['email', 'Contact Email'],
                  ['phone', 'Phone'],
                  ['size', 'Company Size']
                ].map(([key, label]) => (
                  <div key={key}>
                    <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                      {label}
                    </label>

                    <input
                      value={company[key]}
                      onChange={e => setCompany(prev => ({
                        ...prev,
                        [key]: e.target.value
                      }))}
                      className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                    Company Description
                  </label>

                  <textarea
                    rows="4"
                    value={company.description}
                    onChange={e => setCompany(prev => ({
                      ...prev,
                      description: e.target.value
                    }))}
                    className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                  />
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditProfile(false)}
                    className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white"
                  >
                    <FaSave /> Save Changes
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* ADD PROJECT MODAL */}

      {showAddProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">
                Add Project
              </h2>

              <button
                onClick={() => setShowAddProject(false)}
                className="rounded-lg bg-slate-100 p-2 text-slate-500"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={addProject} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Project Name
                </label>
                <input
                  required
                  name="name"
                  placeholder="e.g. Smart Queue System"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Description
                </label>
                <textarea
                  required
                  name="description"
                  rows="3"
                  placeholder="Describe your project..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Technologies
                </label>
                <input
                  required
                  name="technologies"
                  placeholder="React, Django, PostgreSQL"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                />
                <p className="mt-1 text-[10px] text-slate-400">
                  Separate technologies using commas.
                </p>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  Live Demo URL
                </label>
                <input
                  name="link"
                  type="url"
                  placeholder="https://..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  GitHub URL
                </label>
                <input
                  name="github"
                  type="url"
                  placeholder="https://github.com/..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
                />
              </div>

              <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddProject(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white"
                >
                  <FaPlus /> Add Project
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  )
}

export default Profile
