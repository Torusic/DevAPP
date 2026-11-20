
import React, { useState } from 'react'
import {
  FaSearch,
  FaPlus,
  FaEllipsisV,
  FaPaperPlane,
  FaArrowLeft,
  FaUsers,
  FaCompass,
  FaComments,
  FaHashtag
} from 'react-icons/fa'

function Community() {

  const [activeTab, setActiveTab] = useState('my')
  const [activeCommunity, setActiveCommunity] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [message, setMessage] = useState('')
  const [joined, setJoined] = useState([1, 2])

  const [communities] = useState([
    {
      id: 1,
      name: 'React Developers',
      description: 'A community for React developers to learn and share ideas.',
      avatar: 'R',
      color: 'bg-blue-100 text-blue-700',
      members: 245,
      category: 'Development',
      latest: 'Anyone working with React 19?',
      time: '10:24 AM',
      unread: 3
    },
    {
      id: 2,
      name: 'Python & Django',
      description: 'Discuss Python, Django and backend development.',
      avatar: 'P',
      color: 'bg-yellow-100 text-yellow-700',
      members: 180,
      category: 'Development',
      latest: 'I have shared a new tutorial.',
      time: 'Yesterday',
      unread: 0
    },
    {
      id: 3,
      name: 'Tech Opportunities',
      description: 'Find internships, jobs and technology opportunities.',
      avatar: 'T',
      color: 'bg-purple-100 text-purple-700',
      members: 320,
      category: 'Career',
      latest: 'New internship opportunities available.',
      time: 'Yesterday',
      unread: 5
    },
    {
      id: 4,
      name: 'UI/UX Designers',
      description: 'Connect with designers and discuss design trends.',
      avatar: 'U',
      color: 'bg-pink-100 text-pink-700',
      members: 96,
      category: 'Design',
      latest: 'Check out this new design.',
      time: 'Mon',
      unread: 0
    },
    {
      id: 5,
      name: 'Data Science Hub',
      description: 'Explore data science, machine learning and analytics.',
      avatar: 'D',
      color: 'bg-green-100 text-green-700',
      members: 156,
      category: 'Technology',
      latest: 'Welcome to the community!',
      time: 'Today',
      unread: 0
    },
    {
      id: 6,
      name: 'Cybersecurity Network',
      description: 'Learn and discuss cybersecurity and online safety.',
      avatar: 'C',
      color: 'bg-red-100 text-red-700',
      members: 210,
      category: 'Technology',
      latest: 'New security discussion.',
      time: 'Today',
      unread: 0
    },
    {
      id: 7,
      name: 'React Developers',
      description: 'A community for React developers to learn and share ideas.',
      avatar: 'R',
      color: 'bg-blue-100 text-blue-700',
      members: 245,
      category: 'Development',
      latest: 'Anyone working with React 19?',
      time: '10:24 AM',
      unread: 3
    },
    {
      id: 8,
      name: 'React Developers',
      description: 'A community for React developers to learn and share ideas.',
      avatar: 'R',
      color: 'bg-blue-100 text-blue-700',
      members: 245,
      category: 'Development',
      latest: 'Anyone working with React 19?',
      time: '10:24 AM',
      unread: 3
    },
    {
      id: 9,
      name: 'React Developers',
      description: 'A community for React developers to learn and share ideas.',
      avatar: 'R',
      color: 'bg-blue-100 text-blue-700',
      members: 245,
      category: 'Development',
      latest: 'Anyone working with React 19?',
      time: '10:24 AM',
      unread: 3
    }
  ])


  const [messages, setMessages] = useState({
    1: [
      {
        id: 1,
        sender: 'John Kamau',
        initials: 'JK',
        text: 'Hey developers! How is everyone doing?',
        time: '10:15 AM',
        own: false
      },
      {
        id: 2,
        sender: 'Mary Wanjiku',
        initials: 'MW',
        text: 'Doing great! Currently working on a React project.',
        time: '10:18 AM',
        own: false
      },
      {
        id: 3,
        sender: 'David Otieno',
        initials: 'DO',
        text: 'Anyone working with React 19?',
        time: '10:24 AM',
        own: false
      }
    ],
    2: [
      {
        id: 1,
        sender: 'Peter',
        initials: 'PK',
        text: 'Welcome everyone to the Python & Django community!',
        time: '9:30 AM',
        own: false
      }
    ]
  })

  const categories = [
    'All',
    'Development',
    'Design',
    'Technology',
    'Career'
  ]

  const myCommunities = communities.filter(community =>
    joined.includes(community.id)
  )

  const discoverCommunities = communities.filter(community =>
    !joined.includes(community.id)
  )

  const currentList =
    activeTab === 'my' ? myCommunities : discoverCommunities

  const displayedCommunities = currentList.filter(community => {

    const matchesSearch = community.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || community.category === category

    return matchesSearch && matchesCategory
  })

  const active = communities.find(
    community => community.id === activeCommunity
  )

  const activeMessages = messages[activeCommunity] || []

  const openCommunity = id => {
    setActiveCommunity(id)
    setShowChat(true)
  }

  const joinCommunity = id => {
    setJoined(previous =>
      previous.includes(id) ? previous : [...previous, id]
    )

    setActiveTab('my')
    setSearch('')
    setCategory('All')
  }

  const handleSendMessage = e => {
    e.preventDefault()

    if (!message.trim() || !activeCommunity) return

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      initials: 'ME',
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      }),
      own: true
    }

    setMessages(previous => ({
      ...previous,
      [activeCommunity]: [
        ...(previous[activeCommunity] || []),
        newMessage
      ]
    }))

    setMessage('')
  }

  return (
    <section className="min-h-screen rounded-2xl mb-20 bg-indigo-50 p-2">

      <div className="w-full lg:max-w-7xl max-w-4xl">

        {/* PAGE HEADER */}

        <div className=" hidden lg:flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Communities
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Connect, collaborate and grow with other developers.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 mb-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <FaPlus size={12} />
            Create Community
          </button>

        </div>

        {/* MAIN CONTENT */}

        <div className="w-full max-w-7xl  overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">

          <div className="grid min-h-[500px]   md:grid-cols-3">

            {/* LEFT PANEL */}

            <div
              className={`min-w-0 flex-col border-r  sticky top-0 border-slate-100 ${showChat ? 'hidden md:flex' : 'flex'
                }`}
            >

              {/* TABS */}

              <div className="flex border-b border-slate-100 p-1">

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('my')
                    setSearch('')
                    setCategory('All')
                    setShowChat(false)
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-3 text-xs  font-semibold transition ${activeTab === 'my'
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:bg-slate-50'
                    }`}
                >
                  <FaUsers size={14} />
                  My Communities

                  <span className="rounded-full bg-white px-1 py-0.5 text-xs">
                    {myCommunities.length}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('discover')
                    setSearch('')
                    setCategory('All')
                    setShowChat(false)
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-2 py-3 text-xs sm:text-sm font-semibold transition ${activeTab === 'discover'
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-500 hover:bg-slate-50'
                    }`}
                >
                  <FaCompass size={14} />
                  Discover
                </button>

              </div>

              {/* SEARCH */}

              <div className="p-3">

                <div className="flex items-center gap-2  rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-indigo-400">

                  <FaSearch className="text-slate-400" size={14} />

                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search communities..."
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />

                </div>

                {/* CATEGORY FILTERS */}

                <div className="mt-3 flex flex-wrap gap-2 pb-1">

                  {categories.map(item => (

                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${category === item
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

              {/* COMMUNITY LIST */}

              <div className="flex-1 p-2 border bg-white m-2 rounded-2xl border-indigo-100  ">

                <div className="flex items-center justify-between px-4 py-2">

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {activeTab === 'my'
                      ? 'Your Communities'
                      : 'Explore Communities'}
                  </p>

                  <span className="text-xs text-slate-400">
                    {displayedCommunities.length} results
                  </span>

                </div>

                {displayedCommunities.length > 0 ? (

                  <div className="divide-y p-2 h-[320px] lg:h-[470px]   rounded-2xl  bg-white m-2 overflow-y-auto overscroll-contain scrollbar-hide divide-slate-100">

                    {displayedCommunities.map(community => (

                      activeTab === 'my' ? (

                        <button
                          key={community.id}
                          type="button"
                          onClick={() => openCommunity(community.id)}
                          className={`flex w-full items-center gap-3 my-2 border-b border-b-blue-200   p-4 text-left rounded-lg transition hover:bg-indigo-50 ${activeCommunity === community.id && showChat
                              ? 'bg-blue-50'
                              : 'bg-white'
                            }`}
                        >

                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-md font-bold ${community.color}`}>
                            {community.avatar}
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-center justify-between gap-2">

                              <h3 className="truncate text-xs font-semibold text-slate-800">
                                {community.name}
                              </h3>

                              <span className="shrink-0 text-[11px] text-slate-400">
                                {community.time}
                              </span>

                            </div>

                            <div className="mt-1 flex items-center justify-between gap-2">

                              <p className="truncate text-xs text-slate-500">
                                {community.latest}
                              </p>

                              {community.unread > 0 && (
                                <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 px-1.5 text-[10px] font-bold text-white">
                                  {community.unread}
                                </span>
                              )}

                            </div>

                          </div>

                        </button>

                      ) : (

                        <div
                          key={community.id}
                          className="flex items-center gap-3 p-4 transition hover:bg-slate-50"
                        >

                          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${community.color}`}>
                            {community.avatar}
                          </div>

                          <div className="min-w-0 flex-1">

                            <h3 className="truncate text-sm font-semibold text-slate-800">
                              {community.name}
                            </h3>

                            <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                              {community.description}
                            </p>

                            <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
                              <FaUsers size={10} />
                              {community.members} members
                              <span>•</span>
                              {community.category}
                            </div>

                          </div>

                          <button
                            type="button"
                            onClick={() => joinCommunity(community.id)}
                            className="shrink-0 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
                          >
                            Join
                          </button>

                        </div>

                      )

                    ))}

                  </div>

                ) : (

                  <div className="px-5 py-12 text-center">

                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <FaUsers size={20} />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-700">
                      No communities found
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Try changing your search or category.
                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* RIGHT PANEL / CHAT */}

            <div
              className={`min-w-0 min-h-0 md:col-span-2 flex-col h-[calc(100dvh-180px)] md:h-[650px] overflow-hidden ${showChat ? 'flex' : 'hidden md:flex'
                }`}
            >

              {active ? (

                <>

                  {/* CHAT HEADER - FIXED AT TOP */}

                  <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-5">

                    <div className="flex min-w-0 items-center gap-3">

                      <button
                        type="button"
                        onClick={() => setShowChat(false)}
                        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden"
                      >
                        <FaArrowLeft />
                      </button>

                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${active.color}`}>
                        {active.avatar}
                      </div>

                      <div className="min-w-0">

                        <h2 className="truncate text-sm font-bold text-slate-800">
                          {active.name}
                        </h2>

                        <p className="text-xs text-slate-400">
                          {active.members} members
                        </p>

                      </div>

                    </div>

                    <button
                      type="button"
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
                    >
                      <FaEllipsisV size={14} />
                    </button>

                  </div>

                  {/* MESSAGES - ONLY THIS SECTION SCROLLS */}

                  <div
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain scrollbar-hide flex flex-col gap-4 bg-slate-50/60 p-4 sm:p-5"
                  >

                    {activeMessages.length > 0 ? (

                      activeMessages.map(msg => (

                        <div
                          key={msg.id}
                          className={`flex items-end gap-2 ${msg.own ? 'justify-end' : 'justify-start'
                            }`}
                        >

                          {!msg.own && (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                              {msg.initials}
                            </div>
                          )}

                          <div
                            className={`flex max-w-[80%] flex-col ${msg.own ? 'items-end' : 'items-start'
                              }`}
                          >

                            {!msg.own && (
                              <span className="mb-1 ml-1 text-[11px] font-semibold text-slate-500">
                                {msg.sender}
                              </span>
                            )}

                            <div
                              className={`rounded-2xl px-4 py-2.5 text-sm ${msg.own
                                  ? 'rounded-br-sm bg-indigo-600 text-white'
                                  : 'rounded-bl-sm border border-slate-100 bg-white text-slate-700'
                                }`}
                            >
                              {msg.text}
                            </div>

                            <span className="mt-1 text-[10px] text-slate-400">
                              {msg.time}
                            </span>

                          </div>

                        </div>

                      ))

                    ) : (

                      <div className="m-auto text-center">

                        <FaComments className="mx-auto mb-3 text-3xl text-slate-300" />

                        <p className="text-sm font-semibold text-slate-600">
                          Start a conversation
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Be the first to send a message.
                        </p>

                      </div>

                    )}

                  </div>

                  {/* MESSAGE INPUT - FIXED AT BOTTOM */}

                  <form
                    onSubmit={handleSendMessage}
                    className="sticky bottom-0 z-20 shrink-0 border-t border-slate-100 bg-white p-3 sm:p-4"
                  >

                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 focus-within:border-indigo-400">

                      <input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder={`Message ${active.name}...`}
                        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                      />

                      <button
                        type="submit"
                        disabled={!message.trim()}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <FaPaperPlane size={13} />
                      </button>

                    </div>

                    <p className="mt-2 text-center text-[10px] text-slate-400">
                      Keep conversations respectful and professional.
                    </p>

                  </form>

                </>

              ) : (

                /* EMPTY CHAT STATE */

                <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">

                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500">
                    <FaComments size={28} />
                  </div>

                  <h2 className="text-lg font-bold text-slate-800">
                    Your developer community
                  </h2>

                  <p className="mt-2 max-w-sm text-sm text-slate-500">
                    Select a community from the list to connect with members,
                    share ideas and participate in discussions.
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveTab('discover')}
                    className="mt-5 flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 md:hidden"
                  >
                    <FaCompass size={13} />
                    Discover Communities
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Community
